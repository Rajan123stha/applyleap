# Generated by Django 5.1.4 on 2025-01-10 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_blogcategory_alter_blogpage_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpage',
            name='category',
            field=models.CharField(blank=True, help_text='Specify the category of the blog.', max_length=255, null=True),
        ),
    ]
