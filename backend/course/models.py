from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.fields import RichTextField
from wagtail.images.api.fields import ImageRenditionField
from wagtail.api import APIField
from modelcluster.fields import ParentalKey
from rest_framework import serializers

# Addable Course Details Model
class CourseDetail(models.Model):
    page = ParentalKey('CoursePage', related_name='course_details', on_delete=models.CASCADE)
    field = models.CharField(max_length=255, help_text="Enter the field of the course.")
    description = RichTextField(blank=True, help_text="Add a description for the field.")

    panels = [
        FieldPanel('field'),
        FieldPanel('description'),
    ]

# Addable Student Review Model
class StudentReview(models.Model):
    page = ParentalKey('CoursePage', related_name='student_reviews', on_delete=models.CASCADE)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    name = models.CharField(max_length=255, help_text="Enter the name of the student.")
    review = RichTextField(blank=True, help_text="Add the student's review.")

    panels = [
        FieldPanel('image'),
        FieldPanel('name'),
        FieldPanel('review'),
    ]

# Addable FAQ Model
class CourseFAQ(models.Model):
    page = ParentalKey('CoursePage', related_name='faqs', on_delete=models.CASCADE)
    question = models.CharField(max_length=255, help_text="Enter the FAQ question.")
    answer = RichTextField(blank=True, help_text="Enter the FAQ answer.")

    panels = [
        FieldPanel('question'),
        FieldPanel('answer'),
    ]

# Serializer for Course Details
class CourseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseDetail
        fields = ['field', 'description']

# Serializer for Student Review
class StudentReviewSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = StudentReview
        fields = ['image_url', 'name', 'review']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.file.url
        return None

# Serializer for Course FAQ
class CourseFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseFAQ
        fields = ['question', 'answer']

# Course Page Model
class CoursePage(Page):
    banner_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    one_liner = models.CharField(max_length=255, blank=True, help_text="Add a one-liner about the course.")
    field = models.CharField(max_length=255, blank=True, help_text="Enter the field of study.")
    duration = models.CharField(max_length=255, blank=True, help_text="Specify the course duration.")
    introduction = RichTextField(blank=True, help_text="Add an introduction about the course.")
    key_highlights = RichTextField(blank=True, help_text="Highlight key features of the course.")
    admission_details = RichTextField(blank=True, help_text="Provide details about the admission process.")
    career_opportunities = RichTextField(blank=True, help_text="Explain career opportunities after this course.")

    content_panels = Page.content_panels + [
        FieldPanel('banner_image'),
        FieldPanel('one_liner'),
        FieldPanel('field'),
        FieldPanel('duration'),
        FieldPanel('introduction'),
        FieldPanel('key_highlights'),
        FieldPanel('admission_details'),
        FieldPanel('career_opportunities'),
        InlinePanel('course_details', label="Course Details"),
        InlinePanel('student_reviews', label="Student Reviews"),
        InlinePanel('faqs', label="FAQs"),
    ]

    api_fields = [
        APIField('banner_image', ImageRenditionField('original')),
        APIField('one_liner'),
        APIField('field'),
        APIField('duration'),
        APIField('introduction'),
        APIField('key_highlights'),
        APIField('admission_details'),
        APIField('career_opportunities'),
        APIField('course_details', serializer=CourseDetailSerializer(many=True)),
        APIField('student_reviews', serializer=StudentReviewSerializer(many=True)),
        APIField('faqs', serializer=CourseFAQSerializer(many=True)),
    ]

    class Meta:
        verbose_name = "Course Page"
        verbose_name_plural = "Course Pages"
