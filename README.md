# Spleeter Web

Spleeter Web is a web application for isolating or removing the vocal, accompaniment, bass, and/or drum components of any song. For example, you can use it to isolate the vocals of a track, or you can use it remove the vocals to get an instrumental version of a song.

It supports a number of different source separation models: [Spleeter](https://github.com/deezer/spleeter) (`4stems-model`), [Demucs](https://github.com/facebookresearch/demucs), [Tasnet](https://github.com/facebookresearch/demucs), [CrossNet-Open-Unmix](https://github.com/sony/ai-research-code/tree/master/x-umx), and [D3Net](https://github.com/sony/ai-research-code/tree/master/d3net).

The app uses [Django](https://www.djangoproject.com/) for the backend API and [React](https://reactjs.org/) for the frontend. [Celery](https://docs.celeryproject.org/en/stable/getting-started/introduction.html) is used for the task queue. Docker images are available, including ones with GPU support.
