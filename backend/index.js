const express = require('express')
const path = require('path')
const sqlite3 = require('sqlite3').verbose()
const app = express()
app.use(express.json()) // middleware

// Öppna anslutning till DB
const db = new sqlite3.Database(path.resolve(__dirname, 'products.sqlite'))

// Hämta produkter
app.get('/products/', async (req, res) => {
  const searchTerm = req.query.titel
  // res.status(200).send(searchTerm)
  if (searchTerm) {
    db.all(
      'SELECT * FROM products WHERE titel = ?',
      searchTerm,
      (err, rows) => {
        if (err) {
          console.error(err.message)
          res.status(500).send('Database error')
          return
        }
        res.json(rows)
      }
    )
  }
})

// Hämta kategorier
app.get('/products/:category_id', (req, res) => {
  const category_id = req.params.category_id
  if (category_id) {
    db.all(
      'SELECT * FROM products WHERE category_id = ?',
      category_id,
      (err, rows) => {
        if (err) {
          console.error(err.message)
          res.status(500).send('Database error')
          return
        }
        res.json(rows)
      }
    )
  } else {
    db.all('SELECT * FROM products', (err, rows) => {
      if (err) {
        console.error(err.message)
        res.status(500).send('Database error')
        return
      }
      res.json(rows)
    })
  }
})

// Hantera nyhetsbrev
app.post('/newsletter', async (req, res) => {
  try {
    await db.run('INSERT INTO newsletter (news_id, news_email) VALUES (?,?)', [
      req.body.news_id,
      req.body.news_email
    ])
    res.status(201).send() // Created status code
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Database error')
  }
})
// Lägg till produkt i varukorg

app.post('/cart', async (req, res) => {
  try {
    const { productid, price, quantity } = req.body

    if (!productid || !price || !quantity) {
      return res
        .status(400)
        .send('Missing required fields: productid, price, quantity')
    }

    await db.run(
      'INSERT INTO cart (productid, price, quantity) VALUES (?,?,?)',
      [productid, price, quantity]
    )
    res.status(201).send()
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Database error')
  }
})

// Hämta alla produkter i varukorg
// app.get('/cart/:id', (_req, res) => {
//   db.all('SELECT * FROM cart', (err, rows) => {
//     if (err) {
//       console.error(err.message)
//       res.status(500).send('Database error')
//       return
//     }
//     console.log('Fetched cart items:', rows)
//     res.json(rows)
//   })
// })

// Ta bort produkt från varukorg
// app.delete('/cart/:id', (req, res) => {
//   const id = req.params.id
//   db.run('DELETE FROM cart WHERE id = ?', [id], function (err) {
//     if (err) {
//       console.error(err.message)
//       res.status(500).send('Database error')
//       return
//     }
//     res.status(200).send({ deleted: this.changes })
//   })
// })

app.use(express.static(path.join(path.resolve(), 'dist')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Redo på http://localhost:3000')
})
