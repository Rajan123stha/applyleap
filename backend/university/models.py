from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.fields import RichTextField
from wagtail.images.models import Image

from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField
from modelcluster.fields import ParentalKey
from rest_framework import serializers


# Addable Tuition Fees Model
class UniversityTuitionFee(models.Model):
    page = ParentalKey('UniversityPage', related_name='tuition_fees', on_delete=models.CASCADE)
    program = models.CharField(max_length=255, help_text="Enter the program name.")
    fee_per_year = models.CharField(max_length=255, help_text="Enter the fee per year.")
    duration = models.CharField(max_length=255, help_text="Enter the duration of the program.")

    panels = [
        FieldPanel('program'),
        FieldPanel('fee_per_year'),
        FieldPanel('duration'),
    ]


# Addable Alumni Success Stories Model
class AlumniSuccessStory(models.Model):
    page = ParentalKey('UniversityPage', related_name='alumni_success_stories', on_delete=models.CASCADE)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    name = models.CharField(max_length=255, help_text="Enter the name of the alumni.")
    details = RichTextField(blank=True, help_text="Add details about the alumni's success story.")

    panels = [
        FieldPanel('image'),
        FieldPanel('name'),
        FieldPanel('details'),
    ]


# FAQ Model
class UniversityFAQ(models.Model):
    page = ParentalKey('UniversityPage', related_name='faqs', on_delete=models.CASCADE)
    question = models.CharField(max_length=255, help_text="Enter the FAQ question.")
    answer = RichTextField(blank=True, help_text="Enter the FAQ answer.")

    panels = [
        FieldPanel('question'),
        FieldPanel('answer'),
    ]
# Serializer for University Tuition Fee
class UniversityTuitionFeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversityTuitionFee
        fields = ['program', 'fee_per_year', 'duration']


# Serializer for Alumni Success Story
class AlumniSuccessStorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = AlumniSuccessStory
        fields = ['image_url', 'name', 'details']

    def get_image_url(self, obj):
        if obj.image:  # Ensure image exists
            return obj.image.file.url  # Correctly access the URL
        return None  # Return None if no image is available
# Serializer for University FAQ
class UniversityFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversityFAQ
        fields = ['question', 'answer']

# University Page Model
class UniversityPage(Page):
    banner_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    quote = models.CharField(max_length=255, blank=True, help_text="Add a quote about the university.")
    rank = models.CharField(max_length=255, blank=True, help_text="Enter the university's rank.")
    international_students_percentage = models.CharField(max_length=255, blank=True, help_text="Enter the percentage of international students.")
    location = models.CharField(max_length=255, blank=True, help_text="Enter the location of the university.")
    famous_courses = models.CharField(max_length=255, blank=True, help_text="List famous courses offered.")
    established_year = models.CharField(max_length=255, blank=True, help_text="Enter the year the university was established.")
    fee_range = models.CharField(max_length=255, blank=True, help_text="Provide the fee range.")
    introduction = RichTextField(blank=True, help_text="Add an introduction about the university.")
    why_choose_uni = RichTextField(blank=True, help_text="Explain why students should choose this university.")
    academic_information = RichTextField(blank=True, help_text="Provide academic information.")
    admission_details = RichTextField(blank=True, help_text="Provide details about the admission process.")

    content_panels = Page.content_panels + [
        FieldPanel('banner_image'),
        FieldPanel('quote'),
        FieldPanel('rank'),
        FieldPanel('international_students_percentage'),
        FieldPanel('location'),
        FieldPanel('famous_courses'),
        FieldPanel('established_year'),
        FieldPanel('fee_range'),
        FieldPanel('introduction'),
        FieldPanel('why_choose_uni'),
        FieldPanel('academic_information'),
        FieldPanel('admission_details'),
        InlinePanel('tuition_fees', label="Tuition Fees"),
        InlinePanel('alumni_success_stories', label="Alumni Success Stories"),
        InlinePanel('faqs', label="FAQs"),
    ]

    api_fields = [
        APIField('banner_image', ImageRenditionField('original')),
        APIField('quote'),
        APIField('rank'),
        APIField('international_students_percentage'),
        APIField('location'),
        APIField('famous_courses'),
        APIField('established_year'),
        APIField('fee_range'),
        APIField('introduction'),
        APIField('why_choose_uni'),
        APIField('academic_information'),
        APIField('admission_details'),
        APIField(
            'tuition_fees',
            serializer=UniversityTuitionFeeSerializer(many=True)
        ),
        APIField(
            'alumni_success_stories',
            serializer=AlumniSuccessStorySerializer(many=True)
        ),
        APIField(
            'faqs',
            serializer=UniversityFAQSerializer(many=True)
        ),
    ]

    class Meta:
        verbose_name = "University Page"
        verbose_name_plural = "University Pages"
