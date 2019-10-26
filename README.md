# django-with-vuejs


## Add signals
```bash
(venv) $ python manage.py shell
Python 3.7.3 (default, Mar 27 2019, 09:23:39) 
[Clang 10.0.0 (clang-1000.11.45.5)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> from django.contrib.auth import get_user_model
>>> custom_user = get_user_model()
>>> u = custom_user.objects.first()
>>> u
<CustomUser: admin>
>>> from questions.models import Question
>>> q = Question.objects.create(author=u, content='First, question! Doew it work?')
>>> q
<Question: First, question! Doew it work?>
>>> q.slug
'first-question-doew-it-work-t8tnmv'
```