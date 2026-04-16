import type { HTTPClient } from '../core/index.js'
import { AssetsModule } from './modules/assets.js'
import { BatchModule } from './modules/batch.js'
import { CategoriesModule } from './modules/categories.js'
import { ChatboxModule } from './modules/chatbox.js'
import { ConversationsModule } from './modules/conversations.js'
import { FormsModule } from './modules/forms.js'
import { ForumsModule } from './modules/forums.js'
import { LinksModule } from './modules/links.js'
import { NavigationModule } from './modules/navigation.js'
import { NotificationsModule } from './modules/notifications.js'
import { OAuthModule } from './modules/oauth.js'
import { PagesModule } from './modules/pages.js'
import { PostsModule } from './modules/posts.js'
import { ProfilePostsModule } from './modules/profile-posts.js'
import { SearchModule } from './modules/search.js'
import { TagsModule } from './modules/tags.js'
import { ThreadsModule } from './modules/threads.js'
import { UsersModule } from './modules/users.js'

export class ForumAPI {
	readonly assets: AssetsModule
	readonly batch: BatchModule
	readonly categories: CategoriesModule
	readonly chatbox: ChatboxModule
	readonly conversations: ConversationsModule
	readonly forms: FormsModule
	readonly forums: ForumsModule
	readonly links: LinksModule
	readonly navigation: NavigationModule
	readonly notifications: NotificationsModule
	readonly oauth: OAuthModule
	readonly pages: PagesModule
	readonly posts: PostsModule
	readonly profilePosts: ProfilePostsModule
	readonly search: SearchModule
	readonly tags: TagsModule
	readonly threads: ThreadsModule
	readonly users: UsersModule

	constructor(private http: HTTPClient) {
		this.assets = new AssetsModule(http)
		this.batch = new BatchModule(http)
		this.categories = new CategoriesModule(http)
		this.chatbox = new ChatboxModule(http)
		this.conversations = new ConversationsModule(http)
		this.forms = new FormsModule(http)
		this.forums = new ForumsModule(http)
		this.links = new LinksModule(http)
		this.navigation = new NavigationModule(http)
		this.notifications = new NotificationsModule(http)
		this.oauth = new OAuthModule(http)
		this.pages = new PagesModule(http)
		this.posts = new PostsModule(http)
		this.profilePosts = new ProfilePostsModule(http)
		this.search = new SearchModule(http)
		this.tags = new TagsModule(http)
		this.threads = new ThreadsModule(http)
		this.users = new UsersModule(http)
	}

	get raw() {
		return this.http.forum
	}
}
