from django.shortcuts import render_to_response
from django.template import RequestContext
# Create your views here.

word_file = "/usr/share/dict/words"
WORDS = open(word_file).read().splitlines()
WORDS = WORDS[:100]

def entry_index(
        request,
        template='demo/entry_index.html',
        page_template='demo/entry_index_page.html'):
    context = {
        'entries': WORDS,
        'page_template': page_template,
    }
    if request.is_ajax():
        template = page_template
    return render_to_response(
        template, context, context_instance=RequestContext(request))

def next_page():
    pass
