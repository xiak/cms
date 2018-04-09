import React, { PureComponent } from 'react';
import Header from '../../components/Header/WebHeader';
import Content from '../../components/Content/MainContent';

export default class Index extends PureComponent {
  render() {
    const { match } = this.props;
    const key = match.path;
    console.info(match, key);
    const contents = [
      {
        id: '10086',
        author: {
          name: 'test',
          avatar: '/avatar.png',
          details: 'ondsfinsdofidsnfoids',
        },
        article: {
          title: 'mpvue初体验-用vue开发小程序',
          text: '身为小米科技的创始人、董事长和首席执行官，雷军的名字如雷贯耳。其实扒扒雷军的年轻时代，其实他大学读的是计算机专业，是程序员出身，而且一干就是10年。有网友曾说“代码只服雷军”。雷军的代码水平真的很牛吗?雷军的代码水平真的很牛吗?',
          cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2662038506,2983594667&fm=15&gp=0.jpg',
          favour: 100,
          commentNum: 100,
        },
      },
      {
        id: '10087',
        author: {
          name: 'test2',
          avatar: 'https://pic1.zhimg.com/50/v2-c39c79fa9453ee258220d5ca01e9a3b0_s.jpg',
          details: 'ondsfinsdofidsnfoids',
        },
        article: {
          title: 'mpvue初体验-用vue开发小程序',
          text: '身为小米科技的创始人、董事长和首席执行官，雷军的名字如雷贯耳。其实扒扒雷军的年轻时代，其实他大学读的是计算机专业，是程序员出身，而且一干就是10年。有网友曾说“代码只服雷军”。雷军的代码水平真的很牛吗?雷军的代码水平真的很牛吗?',
          cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2557011804,1056021772&fm=27&gp=0.jpg',
          favour: 6,
          commentNum: 7,
        },
      },
      {
        id: '10090',
        author: {
          name: 'test2',
          avatar: '/avatar.png',
          details: 'ondsfinsdofidsnfoids',
        },
        article: {
          title: 'mpvue初体验-用vue开发小程序',
          text: '身为小米科技的创始人、董事长和首席执行官，雷军的名字如雷贯耳。其实扒扒雷军的年轻时代，其实他大学读的是计算机专业，是程序员出身，而且一干就是10年。有网友曾说“代码只服雷军”。雷军的代码水平真的很牛吗?雷军的代码水平真的很牛吗?',
          cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2662038506,2983594667&fm=15&gp=0.jpg',
        },
      },
      {
        id: '10088',
        author: {
          name: 'test2',
          avatar: 'https://pic1.zhimg.com/50/v2-c39c79fa9453ee258220d5ca01e9a3b0_s.jpg',
          details: 'ondsfinsdofidsnfoids',
        },
        article: {
          title: 'mpvue初体验-用vue开发小程序',
          text: '身为小米科技的创始人、董事长和首席执行官，雷军的名字如雷贯耳。其实扒扒雷军的年轻时代，其实他大学读的是计算机专业，是程序员出身，而且一干就是10年。有网友曾说“代码只服雷军”。雷军的代码水平真的很牛吗?雷军的代码水平真的很牛吗?',
          cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2662038506,2983594667&fm=15&gp=0.jpg',
        },
      },
      {
        id: '10089',
        author: {
          name: 'test2',
          avatar: 'https://pic1.zhimg.com/50/v2-c39c79fa9453ee258220d5ca01e9a3b0_s.jpg',
          details: 'ondsfinsdofidsnfoids',
        },
        article: {
          title: 'mpvue初体验-用vue开发小程序',
          text: '身为小米科技的创始人、董事长和首席执行官，雷军的名字如雷贯耳。其实扒扒雷军的年轻时代，其实他大学读的是计算机专业，是程序员出身，而且一干就是10年。有网友曾说“代码只服雷军”。雷军的代码水平真的很牛吗?雷军的代码水平真的很牛吗?',
          cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2662038506,2983594667&fm=15&gp=0.jpg',
        },
      },
    ];
    return (
      <div>
        <Header selectedKey={key} />
        <Content contents={contents} />
      </div>
    );
  }
}
