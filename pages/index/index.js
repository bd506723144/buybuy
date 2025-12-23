const items = [
  {
    id: 1,
    title: "晴天的街角",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "午后的咖啡馆",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "山野漫步",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "雨后霓虹",
    image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "城市晚风",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "手作甜点",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80"
  }
];

Page({
  data: {
    items
  },
  handleTap(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
});
