# Generated by Django 5.1.4 on 2025-01-05 11:20

import django.db.models.deletion
import modelcluster.fields
import wagtail.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0094_alter_page_locale'),
        ('wagtailimages', '0027_image_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='UniversityPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('quote', models.CharField(blank=True, help_text='Add a quote about the university.', max_length=255)),
                ('rank', models.CharField(blank=True, help_text="Enter the university's rank.", max_length=255)),
                ('international_students_percentage', models.CharField(blank=True, help_text='Enter the percentage of international students.', max_length=255)),
                ('location', models.CharField(blank=True, help_text='Enter the location of the university.', max_length=255)),
                ('famous_courses', models.CharField(blank=True, help_text='List famous courses offered.', max_length=255)),
                ('established_year', models.CharField(blank=True, help_text='Enter the year the university was established.', max_length=255)),
                ('fee_range', models.CharField(blank=True, help_text='Provide the fee range.', max_length=255)),
                ('introduction', wagtail.fields.RichTextField(blank=True, help_text='Add an introduction about the university.')),
                ('why_choose_uni', wagtail.fields.RichTextField(blank=True, help_text='Explain why students should choose this university.')),
                ('academic_information', wagtail.fields.RichTextField(blank=True, help_text='Provide academic information.')),
                ('admission_details', wagtail.fields.RichTextField(blank=True, help_text='Provide details about the admission process.')),
                ('banner_image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image')),
            ],
            options={
                'verbose_name': 'University Page',
                'verbose_name_plural': 'University Pages',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='UniversityFAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(help_text='Enter the FAQ question.', max_length=255)),
                ('answer', wagtail.fields.RichTextField(blank=True, help_text='Enter the FAQ answer.')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='faqs', to='university.universitypage')),
            ],
        ),
        migrations.CreateModel(
            name='AlumniSuccessStory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Enter the name of the alumni.', max_length=255)),
                ('details', wagtail.fields.RichTextField(blank=True, help_text="Add details about the alumni's success story.")),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='alumni_success_stories', to='university.universitypage')),
            ],
        ),
        migrations.CreateModel(
            name='UniversityTuitionFee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('program', models.CharField(help_text='Enter the program name.', max_length=255)),
                ('fee_per_year', models.CharField(help_text='Enter the fee per year.', max_length=255)),
                ('duration', models.CharField(help_text='Enter the duration of the program.', max_length=255)),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='tuition_fees', to='university.universitypage')),
            ],
        ),
    ]
