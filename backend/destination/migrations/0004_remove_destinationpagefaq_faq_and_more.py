# Generated by Django 5.1.4 on 2024-12-26 07:31

import django.db.models.deletion
import django.utils.timezone
import modelcluster.fields
import wagtail.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('destination', '0003_destinationpage_courses_destinationpage_quote_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='destinationpagefaq',
            name='faq',
        ),
        migrations.RemoveField(
            model_name='destinationpage',
            name='scholarships',
        ),
        migrations.RemoveField(
            model_name='destinationpage',
            name='cost_expenses',
        ),
        migrations.RemoveField(
            model_name='destinationpage',
            name='cost_range',
        ),
        migrations.AddField(
            model_name='destinationpagefaq',
            name='answer',
            field=wagtail.fields.RichTextField(blank=True, help_text='Add the FAQ answer.'),
        ),
        migrations.AddField(
            model_name='destinationpagefaq',
            name='question',
            field=models.CharField(default=django.utils.timezone.now, help_text='Add the FAQ question.', max_length=255),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='DestinationPageCost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expense', models.CharField(help_text='Add a description of the expense.', max_length=255)),
                ('cost_range', models.CharField(blank=True, help_text='Add the estimated cost range.', max_length=255)),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='cost_details', to='destination.destinationpage')),
            ],
        ),
        migrations.DeleteModel(
            name='FAQ',
        ),
        migrations.DeleteModel(
            name='Scholarship',
        ),
        migrations.AddField(
            model_name='destinationpage',
            name='scholarships',
            field=wagtail.fields.RichTextField(blank=True, help_text='List scholarships in this destination.'),
        ),
    ]
