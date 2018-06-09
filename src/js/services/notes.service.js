module.exports = {
  async listNotes() {
    let notes = await this.resolveAfter3Seconds(['One', 'Two', 'Three']);
    return notes;
  },

  resolveAfter3Seconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
}