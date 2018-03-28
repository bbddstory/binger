interface LangInterface {
    [key: string]: any
}

const lang: LangInterface = {
    en: {
        'cats.movies': 'Movies',
        'cats.tv': 'TV',
        'cats.docs': 'Documentaries',
        'cats.anime': 'Animations',
        'cats.xxx': 'AAA',
        'cats.jav': 'BBB',
        'pg.first': 'First (Shift + Home)',
        'pg.prev': 'Prev (Left Arrow)',
        'pg.next': 'Next (Right Arrow)',
        'pg.last': 'Last (Shift + End)',
        'ft.zone': 'PhantomZone',
        'ft.home': 'Home',
        'ft.fb': 'Give feedback',
        'home.watch': 'Watch Later',
        'home.recomm': 'Recommendations',
        'home.empty': 'List is empty'
    },
    zh: {
        'cats.movies': '电影',
        'cats.tv': '电视剧',
        'cats.docs': '记录片',
        'cats.anime': '动画片',
        'cats.xxx': '欧美成人',
        'cats.jav': '日本成人',
        'pg.first': '第一页 (Shift + Home)',
        'pg.prev': '前一页 (Left Arrow)',
        'pg.next': '下一页 (Right Arrow)',
        'pg.last': '最后页 (Shift + End)',
        'ft.zone': '幽灵地带',
        'ft.home': '首页',
        'ft.fb': '发送反馈',
        'home.watch': '我的视频',
        'home.recomm': '用户推荐',
        'home.empty': '列表为空'
    },
    ja: {
        'cats.movies': '映画',
        'cats.tv': 'テレビ',
        'cats.docs': 'ドキュメンタリー',
        'cats.anime': 'アニメ',
        'cats.xxx': '西洋成人',
        'cats.jav': 'エロ',
        'pg.first': '最初のページ (Shift + Home)',
        'pg.prev': '前のページ (Left Arrow)',
        'pg.next': '次のページ (Right Arrow)',
        'pg.last': '最後のページ (Shift + End)',
        'ft.zone': '幽霊地帯',
        'ft.home': 'ホーム',
        'ft.fb': 'フィードバック',
        'home.watch': '後で見る',
        'home.recomm': 'おすすめ',
        'home.empty': '再生リストは空です'
    }
}

export default lang;