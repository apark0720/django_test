# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-08-11 23:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('startups', '0004_auto_20170811_2335'),
    ]

    operations = [
        migrations.AlterField(
            model_name='startup',
            name='blurb',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='startup',
            name='description',
            field=models.CharField(max_length=1000),
        ),
    ]
