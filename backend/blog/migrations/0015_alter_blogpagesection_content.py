# Generated by Django 5.1.4 on 2025-01-11 10:30

import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0014_blogpage_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpagesection',
            name='content',
            field=wagtail.fields.RichTextField(blank=True, help_text='Add the content for this section with style options.'),
        ),
    ]
