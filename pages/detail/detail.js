const itemMap = {
  1: {
    id: 1,
    title: "晴天的街角",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    description: "午后光线穿过楼宇，记录城市里最温柔的角落。",
    shootDetail: "iPhone 14 Pro · 35mm · f/1.8 · 1/500s",
    productLink: "https://example.com/product/1",
    linkStatus: "可购买"
  },
  2: {
    id: 2,
    title: "午后的咖啡馆",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    description: "暖光与咖啡香气，适合记录生活里的慢节奏。",
    shootDetail: "Sony A7C · 50mm · f/2.0 · 1/200s",
    productLink: "https://example.com/product/2",
    linkStatus: "预售中"
  },
  3: {
    id: 3,
    title: "山野漫步",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description: "清晨山风与松木气息，适合远足装备分享。",
    shootDetail: "Nikon Z6 · 24mm · f/4 · 1/640s",
    productLink: "https://example.com/product/3",
    linkStatus: "库存紧张"
  },
  4: {
    id: 4,
    title: "雨后霓虹",
    image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
    description: "雨后街道的霓虹倒影，推荐防水包包与雨具。",
    shootDetail: "Fujifilm X-T5 · 23mm · f/2.8 · 1/125s",
    productLink: "https://example.com/product/4",
    linkStatus: "可购买"
  },
  5: {
    id: 5,
    title: "城市晚风",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1200&q=80",
    description: "入夜的风与灯光交错，适合夜景穿搭灵感。",
    shootDetail: "Canon R6 · 35mm · f/2.2 · 1/200s",
    productLink: "https://example.com/product/5",
    linkStatus: "即将上新"
  },
  6: {
    id: 6,
    title: "手作甜点",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    description: "手作甜点的暖心瞬间，记录烘焙好物。",
    shootDetail: "iPhone 15 · 28mm · f/1.6 · 1/320s",
    productLink: "https://example.com/product/6",
    linkStatus: "可购买"
  }
};

Page({
  data: {
    item: null,
    comments: [
      { id: 1, author: "米粒", content: "构图好治愈！" },
      { id: 2, author: "Luna", content: "拍摄细节很实用，收藏了。" }
    ],
    newComment: ""
  },
  onLoad(options) {
    const itemId = Number(options.id || 1);
    this.setData({
      item: itemMap[itemId] || itemMap[1]
    });
  },
  handleInput(event) {
    this.setData({
      newComment: event.detail.value
    });
  },
  handleSubmit() {
    const content = this.data.newComment.trim();
    if (!content) {
      return;
    }
    const nextComment = {
      id: Date.now(),
      author: "你",
      content
    };
    this.setData({
      comments: [nextComment, ...this.data.comments],
      newComment: ""
    });
  }
});
