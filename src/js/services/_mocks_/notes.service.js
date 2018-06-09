const mockResponse = ['my', 'fake', 'response', 'data'];

module.exports = {
  async listNotes() {
    return await new Promise((resolve) => {
      resolve(mockResponse);
    });
  }
}