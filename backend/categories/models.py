from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel


class BlogCategory(Page):
    description = models.CharField(max_length=255, help_text="Description of the blog category")

    content_panels = Page.content_panels + [
        FieldPanel('description'),
    ]

    class Meta:
        verbose_name = "Blog Category"
        verbose_name_plural = "Blog Categories"
