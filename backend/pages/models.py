from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField
from django.db import models
# Parent page for Destinations
class DestinationIndexPage(Page):
    introduction = RichTextField(blank=True)
    subpage_types = ['destination.DestinationPage']  # Only allow DestinationPage as children

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    class Meta:
        verbose_name = "Destination Index Page"

# Parent page for Tests
class TestIndexPage(Page):
    introduction = RichTextField(blank=True)
    subpage_types = ['exam.TestPage']  # Only allow TestPage as children

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    class Meta:
        verbose_name = "Test Index Page"

# Parent page for Blogs
class BlogIndexPage(Page):
    introduction = RichTextField(blank=True)
    subpage_types = ['blog.BlogPage']  # Only allow BlogPage as children

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    class Meta:
        verbose_name = "Blog Index Page"

# Parent page for Scholarships
class ScholarshipIndexPage(Page):
    introduction = RichTextField(blank=True)
    subpage_types = ['scholarship.ScholarshipPage']  # Only allow ScholarshipPage as children

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    class Meta:
        verbose_name = "Scholarship Index Page"

# Parent page for Universities
class UniversityIndexPage(Page):
    introduction = RichTextField(blank=True)
    subpage_types = ['university.UniversityPage']  # Only allow UniversityPage as children

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    class Meta:
        verbose_name = "University Index Page"


class BlogCategoryIndexPage(Page):
    introduction = RichTextField(blank=True)
    subpage_types = ['categories.BlogCategory']  # Only allow BlogCategory pages as children

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    class Meta:
        verbose_name = "Blog Category Index Page"



# Parent page for Courses
class CourseIndexPage(Page):
    introduction = RichTextField(blank=True, help_text="Add an introduction for the course index page.")
    subpage_types = ['course.CoursePage']  # Only allow CoursePage as children

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    class Meta:
        verbose_name = "Course Index Page"