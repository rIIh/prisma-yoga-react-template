# React, Yoga, Prisma example/template

## Dependencies

* Prisma CLI [ > Get started](https://www.prisma.io/)
* Docker & Docker-Compose [ > Get started](https://docs.docker.com/get-started/)

## Installation

```bash
git clone https://github.com/rIIh/prisma-yoga-react-template.git
```

```bash
cd prisma-yoga-react-template
```

```bash
npm install
```


```bash
docker-compose up -d
```

## Development

### During development

*Regenerate resolvers typings on public schema changed*

```bash
npm run watch:schema
```

*Manual generation of resolvers typings on public schema changed*

```bash
npm run resgen
```

*Regenerate Prisma client with private schema*

```bash
prisma deploy
```

*Start server and watch for changes. Ignoring "pages" and ".next" directories*

```bash
npm run watch:server
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
