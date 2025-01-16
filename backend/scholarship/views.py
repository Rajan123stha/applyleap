from django.http import JsonResponse
from pages.models import BlogIndexPage, BlogPage

def blog_list(request):
    blog_index = BlogIndexPage.objects.first()  # Adjust to your specific BlogIndexPage
    blogs = BlogPage.objects.live().child_of(blog_index)

    data = [
        {
            'id': blog.id,
            'title': blog.title,
            'writer': blog.writer,
            'url': blog.url,
        }
        for blog in blogs
    ]

    return JsonResponse(data, safe=False)
