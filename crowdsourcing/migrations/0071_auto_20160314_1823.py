# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-14 18:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crowdsourcing', '0070_auto_20160314_1806'),
    ]

    operations = [
        migrations.AlterField(
            model_name='taskworker',
            name='completion_time',
            field=models.FloatField(null=True),
        ),
    ]
