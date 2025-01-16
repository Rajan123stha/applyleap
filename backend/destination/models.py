from django.db import models
from wagtail.api import APIField
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.images.api.fields import ImageRenditionField
from modelcluster.fields import ParentalKey
from rest_framework import serializers


# Nested Models for Related Data
class DestinationPageCourse(models.Model):
    page = ParentalKey('DestinationPage', related_name='courses', on_delete=models.CASCADE)
    name = models.CharField(max_length=255, help_text="Add the course name.")

    panels = [
        FieldPanel('name'),
    ]


class DestinationPageScholarship(models.Model):
    page = ParentalKey('DestinationPage', related_name='scholarships', on_delete=models.CASCADE)
    name = models.CharField(max_length=255, help_text="Add the scholarship name.")
    details = RichTextField(blank=True, help_text="Provide additional details about the scholarship.")

    panels = [
        FieldPanel('name'),
        FieldPanel('details'),
    ]


class DestinationPageUniversity(models.Model):
    page = ParentalKey('DestinationPage', related_name='universities', on_delete=models.CASCADE)
    name = models.CharField(max_length=255, help_text="Add the university name.")
    location = models.CharField(max_length=255, blank=True, help_text="Provide the location of the university.")

    panels = [
        FieldPanel('name'),
        FieldPanel('location'),
    ]


class DestinationPageBenefit(models.Model):
    page = ParentalKey('DestinationPage', related_name='benefits', on_delete=models.CASCADE)
    heading = models.CharField(max_length=255, help_text="Add a heading for the benefit.")
    content = RichTextField(blank=True, help_text="Add content for the benefit.")

    panels = [
        FieldPanel('heading'),
        FieldPanel('content'),
    ]


class DestinationPageCost(models.Model):
    page = ParentalKey('DestinationPage', related_name='cost_details', on_delete=models.CASCADE)
    expense = models.CharField(max_length=255, help_text="Add a description of the expense.")
    cost_range = models.CharField(max_length=255, blank=True, help_text="Add the estimated cost range.")

    panels = [
        FieldPanel('expense'),
        FieldPanel('cost_range'),
    ]


class DestinationPageFAQ(models.Model):
    page = ParentalKey('DestinationPage', related_name='faqs', on_delete=models.CASCADE)
    question = models.CharField(max_length=255, help_text="Add the FAQ question.")
    answer = RichTextField(blank=True, help_text="Add the FAQ answer.")

    panels = [
        FieldPanel('question'),
        FieldPanel('answer'),
    ]


class DestinationPageRequirement(models.Model):
    page = ParentalKey('DestinationPage', related_name='detailed_requirements', on_delete=models.CASCADE)
    heading = models.CharField(max_length=255, help_text="Add a heading for the requirement.")
    content = RichTextField(blank=True, help_text="Add content for the requirement.")

    panels = [
        FieldPanel('heading'),
        FieldPanel('content'),
    ]


# Serializers for API Fields
class DestinationPageCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinationPageCourse
        fields = ['name']


class DestinationPageScholarshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinationPageScholarship
        fields = ['name', 'details']


class DestinationPageUniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinationPageUniversity
        fields = ['name', 'location']


class DestinationPageBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinationPageBenefit
        fields = ['heading', 'content']


class DestinationPageCostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinationPageCost
        fields = ['expense', 'cost_range']


class DestinationPageFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinationPageFAQ
        fields = ['question', 'answer']


class DestinationPageRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinationPageRequirement
        fields = ['heading', 'content']


# Main Destination Page Model
class DestinationPage(Page):
    banner_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    quote = models.CharField(
        max_length=255,
        blank=True,
        help_text="Add an inspiring quote."
    )
    short_intro = models.CharField(
        max_length=500,
        blank=True,
        help_text="Add a short introduction for the destination."
    )
    why_study_here = RichTextField(
        blank=True,
        help_text="Explain why students should choose this destination."
    )

    parent_page_types = ['pages.DestinationIndexPage']  # Adjust app name if needed
    subpage_types = []

    content_panels = Page.content_panels + [
        FieldPanel('banner_image'),
        FieldPanel('quote'),
        FieldPanel('short_intro'),
        FieldPanel('why_study_here'),
        InlinePanel('courses', label="Courses"),
        InlinePanel('scholarships', label="Scholarships"),
        InlinePanel('universities', label="Universities"),
        InlinePanel('detailed_requirements', label="Detailed Requirements"),
        InlinePanel('cost_details', label="Cost Details"),
        InlinePanel('benefits', label="Benefits"),
        InlinePanel('faqs', label="FAQs"),
    ]

    api_fields = [
        APIField('banner_image', ImageRenditionField('original')),
        APIField('quote'),
        APIField('short_intro'),
        APIField('why_study_here'),
        APIField(
            'courses',
            serializer=DestinationPageCourseSerializer(many=True)
        ),
        APIField(
            'scholarships',
            serializer=DestinationPageScholarshipSerializer(many=True)
        ),
        APIField(
            'universities',
            serializer=DestinationPageUniversitySerializer(many=True)
        ),
        APIField(
            'detailed_requirements',
            serializer=DestinationPageRequirementSerializer(many=True)
        ),
        APIField(
            'benefits',
            serializer=DestinationPageBenefitSerializer(many=True)
        ),
        APIField(
            'cost_details',
            serializer=DestinationPageCostSerializer(many=True)
        ),
        APIField(
            'faqs',
            serializer=DestinationPageFAQSerializer(many=True)
        ),
    ]

    class Meta:
        verbose_name = "Destination Page"
        verbose_name_plural = "Destination Pages"
