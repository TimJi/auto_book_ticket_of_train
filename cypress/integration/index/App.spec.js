describe('测试', () => {
  // 测试用例触发前调用的函数钩子
  before(() => {
    // 进入测试页面
    cy.visit('/');
  });

  it('测试是否包含指定文案', () => {
    cy.contains('Edit src/App.js and save to reload.');
  });

  it('获取指定元素', () => {
    cy.get('a.App-link').contains('Learn React');
  });

  it('测试点击事件', () => {
    cy.get('.btn').click();
  });
});
