# Generated by Django 5.1.4 on 2025-01-10 06:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_alter_blogpage_category'),
    ]

    operations = [
        migrations.DeleteModel(
            name='BlogCategory',
        ),
    ]
