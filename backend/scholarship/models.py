from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.api import APIField
from wagtail.admin.panels import FieldPanel, InlinePanel
from modelcluster.fields import ParentalKey
from rest_framework import serializers


# Nested Models for Addable Fields
class ScholarshipDetail(models.Model):
    page = ParentalKey('ScholarshipPage', related_name='scholarship_details', on_delete=models.CASCADE)
    provider_type = models.CharField(
        max_length=50,
        choices=[
            ('government', 'Government'),
            ('college', 'College'),
            ('independent', 'Independent')
        ],
        help_text="Specify the type of provider."
    )
    grant = models.CharField(max_length=255, help_text="Specify the grant amount or type.")
    deadline = models.DateField(help_text="Enter the deadline for the scholarship.")
    title = models.CharField(max_length=255, help_text="Enter the title of the scholarship.")
    criteria = RichTextField(blank=True, help_text="Add eligibility criteria for the scholarship.")

    panels = [
        FieldPanel('provider_type'),
        FieldPanel('grant'),
        FieldPanel('deadline'),
        FieldPanel('title'),
        FieldPanel('criteria'),
    ]


class ScholarshipPage(Page):
    country = models.CharField(max_length=255, help_text="Specify the country for the scholarship.")
    about = RichTextField(blank=True, help_text="Provide details about the scholarship.")
    types_of_scholarship = RichTextField(blank=True, help_text="Describe the types of scholarships available.")
    how_to_apply = RichTextField(blank=True, help_text="Explain the process to apply for the scholarship.")
    tips = RichTextField(blank=True, help_text="Provide tips for applying for scholarships.")

    content_panels = Page.content_panels + [
        FieldPanel('country'),
        FieldPanel('about'),
        FieldPanel('types_of_scholarship'),
        InlinePanel('scholarship_details', label="Scholarship Details"),
        FieldPanel('how_to_apply'),
        FieldPanel('tips'),
    ]

    api_fields = [
        APIField('country'),
        APIField('about'),
        APIField('types_of_scholarship'),
        APIField(
            'scholarship_details',
            serializer='path.to.ScholarshipDetailSerializer(many=True)'  # Replace 'path.to' with the actual path
        ),
        APIField('how_to_apply'),
        APIField('tips'),
    ]

    class Meta:
        verbose_name = "Scholarship Page"
        verbose_name_plural = "Scholarship Pages"


# Serializer for the Addable Field
class ScholarshipDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScholarshipDetail
        fields = ['provider_type', 'grant', 'deadline', 'title', 'criteria']
