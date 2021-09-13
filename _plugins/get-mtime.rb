Jekyll::Hooks.register :pages, :pre_render do |page|
    # inject last modified time in post's datas.
    post.data['last_modified_at'] = File.mtime( page.path )
end