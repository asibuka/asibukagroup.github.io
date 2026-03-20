require 'nokogiri'

module Jekyll
  class AmpGenerator < Generator
    safe true
    priority :low

    def generate(site)
      collections = site.config['collections'].keys

      # Process regular pages
      site.pages.select { |page| valid_md_page?(page) && amp_enabled?(page) }.each do |page|
        html = site.find_converter_instance(Jekyll::Converters::Markdown).convert(page.content)
        page.output = insert_toc(html, page)
        site.pages << generate_amp_page(site, page)
      end

      # Process collection documents
      site.collections.each_value do |collection|
        collection.docs.select { |doc| valid_md_doc?(doc, collections) && amp_enabled?(doc) }.each do |doc|
          html = site.find_converter_instance(Jekyll::Converters::Markdown).convert(doc.content)
          doc.output = insert_toc(html, doc)
          site.pages << generate_amp_page(site, doc)
        end
      end

      # Process archive pages
      site.pages.select { |page| archive_page?(page) && amp_enabled?(page) }.each do |page|
        page.output = insert_toc(page.output, page)
        site.pages << duplicate_archive_as_amp(site, page)
      end
    end

    private

    # ✅ New helper: only block if explicitly false
    def amp_enabled?(item)
      item.data['is_amp'] != false
    end

    def valid_md_doc?(doc, collections)
      doc.path.end_with?('.md') && collections.any? { |c| doc.path.include?("_#{c}/") }
    end

    def valid_md_page?(page)
      page.path.end_with?('.md')
    end

    def archive_page?(page)
      page.data['layout'] == 'archive'
    end

    def generate_amp_page(site, original)
      amp_data = original.data.dup
      amp_data['is_amp'] = true
      amp_data['permalink'] = original.url.sub(/\/$/, '') + '/amp/'
      amp_data['sitemap'] = false

      basename = File.basename(original.path, File.extname(original.path))
      amp_filename = "#{basename}-amp.md"
      amp_dir = File.dirname(original.path.sub(site.source, ''))

      amp_page = PageWithoutAFile.new(site, site.source, amp_dir, amp_filename)
      content = site.find_converter_instance(Jekyll::Converters::Markdown).convert(original.content)

      content_with_toc = insert_toc(content, original)

      amp_page.content = content_with_toc
      amp_page.data = amp_data

      amp_page
    end

    def duplicate_archive_as_amp(site, original)
      amp_data = original.data.dup
      amp_data['is_amp'] = true
      amp_data['permalink'] = original.url.sub(/\/$/, '') + '/amp/'
      amp_data['sitemap'] = false

      amp_page = PageWithoutAFile.new(site, site.source, original.dir, 'index-amp.html')
      amp_output_with_toc = insert_toc(original.output, original)

      amp_page.output = amp_output_with_toc
      amp_page.content = original.content
      amp_page.data = amp_data

      amp_page
    end

    def insert_toc(html, page_or_doc)
      return html if page_or_doc.data['toc'] == false

      doc = Nokogiri::HTML5.fragment(html)
      headings = doc.css('h2, h3, h4, h5, h6')
      return html if headings.empty?

      toc_list = Nokogiri::XML::Node.new('ul', doc)
      toc_list['class'] = 'toc'

      headings.each do |heading|
        id = heading['id'] || heading.content.downcase.strip.gsub(/[^\w]+/, '-')
        heading['id'] = id

        li = Nokogiri::XML::Node.new('li', doc)
        li['class'] = "toc-#{heading.name}"

        a = Nokogiri::XML::Node.new('a', doc)
        a['href'] = "##{id}"
        a.content = heading.text

        li.add_child(a)
        toc_list.add_child(li)
      end

      toc_container = Nokogiri::XML::Node.new('nav', doc)
      toc_container['class'] = 'toc-container'
      toc_container.add_child(toc_list)

      first_h2 = doc.at_css('h2')
      if first_h2
        first_h2.add_previous_sibling(toc_container)
      else
        doc.children.first.add_previous_sibling(toc_container)
      end

      doc.to_html
    end
  end
end