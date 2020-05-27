<div align="center">
  <h1>TrainingProject.FSDSchool</h1>
  <a href="/" target="_blank">Посмотреть проект на GitHub Pages</a>
  <p>
    Проект создан в учебных целях. Технологии, с которыми необходимо научится работать: <em>HTML | CSS | Препроцессоры | Шаблонизаторы | Webpack | JavaScript | JQuery | Использовать компонентный подход | GIT |БЭМ | Figma<em>
  </p>
  <a href="https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/FSD-frontend-education-program.-The-2nd-task?node-id=0%3A1" target="_blank">Стартовый макет в Figma</a>
</div>


## Начало проекта:

``` bash
# Клонировать репозиторий:
git clone https://github.com/Andreyneumyvannyi/TrainingProject-FSD-School.git

# Установить зависимости:
npm install

# Развернуть проект в режиме разработки
npm run dev

# Создать итоговую версию проекта /public для размещения на сервере
npm run build
```

## Структура проекта:

* `build` - директория с основными конфигурациями Webpack.
* `src/assets/components` - папка где хранятся основные компоненты UI-kit.
* `src/assets/fonts` - шрифты.
* `src/assets/img` - картинки.
* `src/assets/pug/pages` - основные страницы сайта в которые добавляем компоненты, они же попадут в финальную сборку учитывая все зависимости.
* `src/assets/pug/utils` - директория для хранения вспомагательных файлов, переменные, миксины и пр.
* `src/assets/scss/slyle.scss` - основные стили сайта в которые добавляем стили компонентов, в финальной сборке будет единый файл со стилями, который подключается ко всем страницам автоматически.
* `src/assets/scss/utils` - директория для хранения вспомагательных файлов, переменные, миксины и пр.
* `src/static` - директория для хранения файлов типа favicon sitemap и прочие нужные файлы для SEO.
* `src/index.js` - точка входа куда имортируются скрипты и стили.


Copyright (c) 2020-present, [Andrey Neumuvannyi](https://github.com/Andreyneumyvannyi)