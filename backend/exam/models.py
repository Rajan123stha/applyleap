from django.db import models
from wagtail.api import APIField
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.models import Page
from wagtail.fields import RichTextField, StreamField
from wagtail.images.api.fields import ImageRenditionField # Updated import for Wagtail 6.0
from modelcluster.fields import ParentalKey
from rest_framework import serializers

from wagtail.admin.panels import FieldPanel, InlinePanel




# Nested Models for Cost, Comparison, and FAQ
class TestPageCost(models.Model):
    page = ParentalKey('TestPage', related_name='costs', on_delete=models.CASCADE)
    test_type = models.CharField(max_length=255, help_text="Add the test type.")
    cost = models.CharField(max_length=255, help_text="Add the cost for this test type.")

    panels = [
        FieldPanel('test_type'),
        FieldPanel('cost'),
    ]


class TestPageComparison(models.Model):
    page = ParentalKey('TestPage', related_name='comparisons', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, help_text="Add the comparison title.")
    content = RichTextField(blank=True, help_text="Provide details for the comparison.")

    panels = [
        FieldPanel('title'),
        FieldPanel('content'),
    ]


class TestPageFAQ(models.Model):
    page = ParentalKey('TestPage', related_name='faqs', on_delete=models.CASCADE)
    question = models.CharField(max_length=255, help_text="Add the FAQ question.")
    answer = RichTextField(blank=True, help_text="Add the FAQ answer.")

    panels = [
        FieldPanel('question'),
        FieldPanel('answer'),
    ]


# Serializers for API Fields
class TestPageCostSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestPageCost
        fields = ['test_type', 'cost']


class TestPageComparisonSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestPageComparison
        fields = ['title', 'content']


class TestPageFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestPageFAQ
        fields = ['question', 'answer']


# Main Test Page Model
class TestPage(Page):
    banner_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    
    short_intro = models.CharField(
        max_length=500,
        blank=True,
        help_text="Add a short introduction about the exam."
    )
    why_take_exam = RichTextField(
        blank=True,
        help_text="Explain why students should take this exam."
    )
    exam_types = RichTextField(
        
        blank=True,
        help_text="List the types of this exam."
    )
    exam_format = RichTextField(
        blank=True,
        help_text="Describe the format of the exam."
    )
    test_guide = RichTextField(
        blank=True,
        help_text="Provide a guide on how to prepare for the exam."
    )

    content_panels = Page.content_panels + [
        FieldPanel('banner_image'),  # Use FieldPanel for StreamField with ImageChooserBlock
        FieldPanel('short_intro'),
        FieldPanel('why_take_exam'),
        FieldPanel('exam_types'),
        FieldPanel('exam_format'),
        FieldPanel('test_guide'),
        InlinePanel('costs', label="Cost Details"),
        InlinePanel('comparisons', label="Comparison"),
        InlinePanel('faqs', label="FAQs"),
    ]

    api_fields = [
        APIField('banner_image', serializer=ImageRenditionField('original')),  # Include banner image in API response
        APIField('short_intro'),
        APIField('why_take_exam'),
        APIField('exam_types'),
        APIField('exam_format'),
        APIField('test_guide'),
        APIField(
            'costs',
            serializer=TestPageCostSerializer(many=True)
        ),
        APIField(
            'comparisons',
            serializer=TestPageComparisonSerializer(many=True)
        ),
        APIField(
            'faqs',
            serializer=TestPageFAQSerializer(many=True)
        ),
    ]

    class Meta:
        verbose_name = "Test Page"
        verbose_name_plural = "Test Pages"
