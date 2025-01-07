from django.db import models
from wagtail.api import APIField
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.fields import RichTextField
from wagtail.images.api.fields import ImageRenditionField
from modelcluster.fields import ParentalKey
from rest_framework import serializers


# Nested Model for Events
class EventDetail(models.Model):
    page = ParentalKey('EventsPage', related_name='event_details', on_delete=models.CASCADE)
    event_name = models.CharField(max_length=255, help_text="Name of the event", default="Study Fair")
    banner_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    date = models.DateField(help_text="Event date")
    time = models.TimeField(help_text="Event time")
    location = models.CharField(max_length=255, help_text="Event location")
    description = RichTextField(blank=True, help_text="Event description")

    panels = [
        FieldPanel('event_name'),
        FieldPanel('banner_image'),
        FieldPanel('date'),
        FieldPanel('time'),
        FieldPanel('location'),
        FieldPanel('description'),
    ]


# Nested Model for FAQs
class EventsPageFAQ(models.Model):
    page = ParentalKey('EventsPage', related_name='faqs', on_delete=models.CASCADE)
    question = models.CharField(max_length=255, help_text="Add the FAQ question.")
    answer = RichTextField(blank=True, help_text="Add the FAQ answer.")

    panels = [
        FieldPanel('question'),
        FieldPanel('answer'),
    ]


# Serializers for API Fields
class EventDetailSerializer(serializers.ModelSerializer):
    banner_image = ImageRenditionField('original')  # To include image URL in API

    class Meta:
        model = EventDetail
        fields = ['event_name', 'banner_image', 'date', 'time', 'location', 'description']


class EventsPageFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventsPageFAQ
        fields = ['question', 'answer']


# Main Page Model
class EventsPage(Page):
    content_panels = Page.content_panels + [
        InlinePanel('event_details', label="Event Details"),
        InlinePanel('faqs', label="FAQs"),
    ]

    api_fields = [
        APIField(
            'event_details',
            serializer=EventDetailSerializer(many=True)
        ),
        APIField(
            'faqs',
            serializer=EventsPageFAQSerializer(many=True)
        ),
    ]

    class Meta:
        verbose_name = "Events Page"
        verbose_name_plural = "Events Pages"
