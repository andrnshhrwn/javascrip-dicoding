/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */
import Item from './Item.js'

class Inventory extends Item{
  items = [];

  addItem (item) {
    return this.items.push(item)
  };

  removeItem (id) {
    return this.items.pop(e => e.id === id);
  };

  listItems () {
    return this.items.map(item => item.displayDetails()).join( "\n" );
  };
};

// Jangan hapus kode di bawah ini!
export default Inventory;