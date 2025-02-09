# myapp/models.py
from wagtail.contrib.redirects.models import Redirect
from wagtail.api import APIField
from wagtail.models import Page

class RedirectPage(Page):
    # Expose the redirects via API
    redirects = APIField('redirects')

    @property
    def redirects(self):
        # Fetching all redirects as old and new paths
        return list(Redirect.objects.all().values('old_path', 'new_path'))

    content_panels = Page.content_panels  # You can add other panels as needed

    class Meta:
        verbose_name = "Redirect Page"
        verbose_name_plural = "Redirect Pages"
