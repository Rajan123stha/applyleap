from django.db import models
from wagtail.api import APIField
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.images.api.fields import ImageRenditionField
from modelcluster.fields import ParentalKey
from rest_framework import serializers
from django.utils.timezone import now
from modelcluster.models import ClusterableModel
from rest_framework.serializers import SerializerMethodField


from categories.models import BlogCategory


# Nested Models for Blog Sections and FAQs
class BlogPageSection(models.Model):
    page = ParentalKey('BlogPage', related_name='sections', on_delete=models.CASCADE)
    heading = models.CharField(max_length=255, help_text="Add a heading for this section.")
    content = RichTextField(
        blank=True,
       
        help_text="Add the content for this section with style options."
    )
    panels = [

        FieldPanel('heading'),
        FieldPanel('content'),
    ]


class BlogPageFAQ(models.Model):
    page = ParentalKey('BlogPage', related_name='faqs', on_delete=models.CASCADE)
    question = models.CharField(max_length=255, help_text="Add the FAQ question.")
    answer = RichTextField(blank=True, help_text="Add the FAQ answer.")

    panels = [
        FieldPanel('question'),
        FieldPanel('answer'),
    ]


# Serializers for API Fields
class BlogPageSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPageSection
        fields = ['heading', 'content']


class BlogPageFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPageFAQ
        fields = ['question', 'answer']

class BlogCategoryTitleSerializer(serializers.BaseSerializer):
    def to_representation(self, obj):
        return obj.title


# Main Blog Page Model
class BlogPage(Page):
    banner_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    category = models.ForeignKey(
        'categories.BlogCategory',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='blog_posts',
        help_text="Select category for the blog post"
    )
    writer = models.CharField(
        max_length=255,
        help_text="Add the writer's name."
    )
    publish_date = models.DateField(
        default=now,
        help_text="Set the publish date for the blog."
    )
    summary = models.CharField(
        max_length=500,
        blank=True,
        help_text="Add a brief summary or introduction for the blog."
    )

    content_panels = Page.content_panels + [
        FieldPanel('banner_image'),
        FieldPanel('category'),
        FieldPanel('writer'),
        FieldPanel('publish_date'),
        FieldPanel('summary'),
        InlinePanel('sections', label="Blog Sections"),
        InlinePanel('faqs', label="FAQs"),
    ]

    

    api_fields = [
        APIField('banner_image', ImageRenditionField('original')),
         APIField(
            'category',
            serializer=BlogCategoryTitleSerializer()
        ),
        APIField('writer'),
        APIField('publish_date'),
        APIField('summary'),
        APIField(
            'sections',
            serializer=BlogPageSectionSerializer(many=True)
        ),
        APIField(
            'faqs',
            serializer=BlogPageFAQSerializer(many=True)
        ),
    ]

    class Meta:
        verbose_name = "Blog Page"
        verbose_name_plural = "Blog Pages"

    def get_category(self):
        # Return only the title of the category
        return self.category.title if self.category else None
