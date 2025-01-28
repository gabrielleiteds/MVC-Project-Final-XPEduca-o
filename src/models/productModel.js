let products = [
  {
    id: "1",
    name: "Produto Usado",
    description: "descrição do produto",
    price: "12,90",
  },
  {
    id: "2",
    name: "Produto Novo",
    description: "descrição do produto",
    price: "90,00",
  },
  {
    id: "3",
    name: "Produto Seminovo",
    description: "descrição do produto",
    price: "15,00",
  },
];

module.exports = class ProductModel {
  findAll() {
    return products;
  }
  findById(id) {
    return products.find((product) => product.id === id);
  }
  findByName(name) {
    return products.filter((product) => product.name.includes(name));
  }
  create(product) {
    products.push(product);
    return product;
  }
  update(id, updatedProduct) {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      return products[index];
    }
    return null;
  }
  delete(id) {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return products.splice(index, 1);
    }
    return null;
  }
  count() {
    return products.length;
  }
};
