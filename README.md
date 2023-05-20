# 2023mscottfowler.com
Scott Fowler's personal website
This site is made with the static site generator [Jekyll v4.3.2](https://jekyllrb.com/).

## Terminal Usage
The Jekyll gem makes a jekyll executable available to you in your terminal.

The jekyll program has several commands but the structure is always:

```
jekyll command [argument] [option] [argument_to_option]

Examples:
    jekyll new site/ --blank
    jekyll serve --config _alternative_config.yml
```
    
Typically you’ll use jekyll serve while developing locally and jekyll build when you need to generate the site for production.

For a full list of options and their argument, see [Build Command Options](https://jekyllrb.com/docs/configuration/options/#build-command-options).

Here are some of the most common commands:

- `jekyll new PATH` - Creates a new Jekyll site with default gem-based theme at specified path. The directories will be created as necessary.<br>
- `jekyll new PATH --blank` - Creates a new blank Jekyll site scaffold at specified path.<br>
- `jekyll build or jekyll b` - Performs a one off build your site to ./_site (by default).<br>
- `jekyll serve or jekyll s` - Builds your site any time a source file changes and serves it locally.<br>
- `jekyll clean` - Removes all generated files: destination folder, metadata file, Sass and Jekyll caches.<br>
- `jekyll help` - Shows help, optionally for a given subcommand, e.g. jekyll help build.<br>
- `jekyll new-theme` - Creates a new Jekyll theme scaffold.<br>
- `jekyll doctor` - Outputs any deprecation or configuration issues.<br><br>
To change Jekyll’s default build behavior have a look through the [configuration options](https://jekyllrb.com/docs/configuration/).
