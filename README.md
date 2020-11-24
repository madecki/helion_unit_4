# Walidator hasła

Funkcja powinna zwracać dane jako obiekt w następującym formacie:

```javascript
{
  code: Number,
  description: String,
}
```

- Minimum 8 znaków (jeżeli mniej, zwraca kod 1 + description)

- Przynajmniej jeden znak specjalny (jeżeli mniej, zwraca kod 2 + description)

- Przynajmniej jedna cyfra (jeżeli mniej, zwraca kod 3 + description)

- Przynajmniej jedna duża litera (jeżeli mniej, zwraca kod 4 + description)

- Jeżeli dobre, to zwraca 0, bez description
