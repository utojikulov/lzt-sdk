export interface paths {
    "/oauth/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get Access Token
         * @description Obtain an access token using various grant types.
         *
         *     Supports the following grant types:
         *     - Client Credentials
         *     - Authorization Code
         *     - Refresh Token
         *     - Password
         */
        post: operations["OAuth.Token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/css": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get CSS
         * @description Gets css rulesets for requested selectors.
         */
        get: operations["Assets.Css"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Categories
         * @description List of all categories in the system.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Categories.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/{category_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Category
         * @description Detail information of a category.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Categories.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Forums
         * @description List of all forums in the system.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Forums.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forums/grouped": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Forums Tree
         * @description Returns grouped forums.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Forums.Grouped"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forums/{forum_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Forum
         * @description Detail information of a forum.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Forums.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forums/{forum_id}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Followers
         * @description List of a forum's followers. For privacy reason, only the current user will be included in the list (if the user follows the specified forum).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Forums.Followers"];
        put?: never;
        /**
         * Follow Forum
         * @description Follow a forum.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Forums.Follow"];
        /**
         * Unfollow Forum
         * @description Unfollow a forum.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Forums.Unfollow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forums/followed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Followed Forums
         * @description List of followed forums by current user.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Forums.Followed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forums/feed/options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Feed Options
         * @description Returns available options for the forums feed.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Forums.GetFeedOptions"];
        /**
         * Edit Feed Options
         * @description Edit feed options.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["Forums.EditFeedOptions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/link-forums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Links Forum
         * @description List of all link forums.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Links.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/link-forums/{link_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Link Forum
         * @description Detail information of a link forum.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Links.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Pages
         * @description List of all pages in the system.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Pages.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pages/{page_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Page
         * @description Detail information of a page.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Pages.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Navigation
         * @description List of navigation elements within the system.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Navigation.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Threads
         * @description List of threads in a forum (with pagination).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.List"];
        put?: never;
        /**
         * Create Thread
         * @description Create a new thread.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Contest
         * @description Create a new contest.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.CreateContest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/claims": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Claim
         * @description Create a Claim.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Claim"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Thread
         * @description Detail information of a thread.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.Get"];
        /**
         * Edit thread
         * @description Edit a thread.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["Threads.Edit"];
        post?: never;
        /**
         * Delete Thread
         * @description Delete a thread.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Threads.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/move": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Move Thread
         * @description Move a thread to another forum.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Move"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/bump": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bump Thread
         * @description Bump a thread.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Bump"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/hide": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hide Thread
         * @description Hide a thread from your feed.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Hide"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/star": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bookmark Thread
         * @description Bookmark a thread.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Star"];
        /**
         * Unbookmark Thread
         * @description Unbookmark a thread.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Threads.Unstar"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Thread Followers
         * @description List of a thread's followers. For privacy reason, only the current user will be included in the list.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.Followers"];
        put?: never;
        /**
         * Follow Thread
         * @description Follow a thread.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Follow"];
        /**
         * Unfollow Thread
         * @description Unfollow a thread.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Threads.Unfollow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/followed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Followed Threads
         * @description List of followed threads by current user.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.Followed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/navigation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Navigation Elements
         * @description List of navigation elements to reach the specified thread.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.Navigation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/poll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Poll
         * @description Detail information of a poll.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.Poll.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/poll/votes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Vote Poll
         * @description Vote on a thread poll.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Poll.Vote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/new": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Unread Threads
         * @description List of unread threads (must be logged in).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.Unread"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/recent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Recent Threads
         * @description List of recent threads.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Threads.Recent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contests/{thread_id}/finish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Finish Contest
         * @description Finishes a contest.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Threads.Finish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Posts
         * @description List of posts in a thread (with pagination).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Posts.List"];
        put?: never;
        /**
         * Create Post
         * @description Create a new post.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Posts.Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{post_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Post
         * @description Detail information of a post.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Posts.Get"];
        /**
         * Edit Post
         * @description Edit a post.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["Posts.Edit"];
        post?: never;
        /**
         * Delete Post
         * @description Delete a post.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Posts.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{post_id}/likes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Post Likes
         * @description List of users who liked a post.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Posts.Likes"];
        put?: never;
        /**
         * Like Post
         * @description Like a post.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Posts.Like"];
        /**
         * Unlike Post
         * @description Unlike a post.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Posts.Unlike"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{post_id}/report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Post Report Reasons
         * @description Get post report reasons.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Posts.ReportReasons"];
        put?: never;
        /**
         * Report Post
         * @description Report a post.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Posts.Report"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Post Comments
         * @description List of post comments in a thread.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Posts.Comments.Get"];
        /**
         * Edit Post Comment
         * @description Edit a post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["Posts.Comments.Edit"];
        /**
         * Create Post Comment
         * @description Create a post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Posts.Comments.Create"];
        /**
         * Delete Post Comment
         * @description Delete a post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Posts.Comments.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/comments/report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Report Post Comment
         * @description Report a post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Posts.Comments.Report"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Users
         * @description List of users (with pagination).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Fields
         * @description List of user fields.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Fields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/find": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Users
         * @description List of users filtered by username, email or custom fields.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Find"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User
         * @description Detail information of a user.
         *
         *     Required scopes:
         *     + **read**
         *     + **basic**
         */
        get: operations["Users.Get"];
        /**
         * Edit User
         * @description Edit a user.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["Users.Edit"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/claims": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Claims
         * @description Get user claims.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Claims"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/avatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload Avatar
         * @description Upload avatar for a user.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Users.Avatar.Upload"];
        /**
         * Delete Avatar
         * @description Delete avatar for a user.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Users.Avatar.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/avatar/crop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Crop Avatar
         * @description Crop avatar for a user.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Users.Avatar.Crop"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/background": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload Background
         * @description Upload background for a user.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Users.Background.Upload"];
        /**
         * Delete Background
         * @description Delete background for a user.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Users.Background.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/background/crop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Crop Background
         * @description Crop background for a user.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Users.Background.Crop"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Followers
         * @description List of a user's followers.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Followers"];
        put?: never;
        /**
         * Follow User
         * @description Follow a user.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Users.Follow"];
        /**
         * Unfollow User
         * @description Unfollow a user.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Users.Unfollow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/followings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Followed Users By User
         * @description List of users whom are followed by a user.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Followings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/likes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Likes
         * @description Get information about user likes.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Likes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/ignored": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Ignored Users
         * @description List of ignored users of current user.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Ignored"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/ignore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Edit Ignoring Options
         * @description Edit ignoring options.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["Users.IgnoreEdit"];
        /**
         * Ignore User
         * @description Ignore a user.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Users.Ignore"];
        /**
         * Unignore User
         * @description Stop ignoring a user.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Users.Unignore"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/timeline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contents
         * @description List of contents created by user (with pagination).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Contents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/trophies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Trophies
         * @description List of user trophies.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.Trophies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/secret-answer/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Secret Answer Types
         * @description Get available secret answer types for user account security.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Users.SecretAnswerTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account/secret-answer/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reset Secret Answer
         * @description Request a reset of the secret answer for the account.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Users.SA.Reset"];
        /**
         * Cancel Secret Answer Reset
         * @description Cancel a pending secret answer reset request for the account.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["Users.SA.CancelReset"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/profile-posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Profile Posts
         * @description List of profile posts (with pagination).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["ProfilePosts.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts/{profile_post_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Profile Post
         * @description Detail information of a profile post.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["ProfilePosts.Get"];
        /**
         * Edit Profile Post
         * @description Edit a profile post.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["ProfilePosts.Edit"];
        post?: never;
        /**
         * Delete Profile Post
         * @description Delete a profile post.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["ProfilePosts.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts/{profile_post_id}/report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Profile Post Report Reasons
         * @description Get Profile Post Report Reasons.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["ProfilePosts.ReportReasons"];
        put?: never;
        /**
         * Report a Profile Post
         * @description Report a profile post.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["ProfilePosts.Report"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Profile Post
         * @description Create a profile post on a user profile.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["ProfilePosts.Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts/{profile_post_id}/stick": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stick Profile Post
         * @description Stick a profile post.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["ProfilePosts.Stick"];
        /**
         * Unstick Profile Post
         * @description Unstick a profile post.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["ProfilePosts.Unstick"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts/{profile_post_id}/likes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Profile Post Likes
         * @description List of users who liked a profile post.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["ProfilePosts.Likes"];
        put?: never;
        /**
         * Like Profile Post
         * @description Like a profile post.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["ProfilePosts.Like"];
        /**
         * Unlike Profile Post
         * @description Unlike a profile post.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["ProfilePosts.Unlike"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Profile Post Comments
         * @description List of comments of a profile post.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["ProfilePosts.Comments.List"];
        /**
         * Edit Profile Post Comment
         * @description Edit a profile post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        put: operations["ProfilePosts.Comments.Edit"];
        /**
         * Create Profile Post Comment
         * @description Create a new profile post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["ProfilePosts.Comments.Create"];
        /**
         * Delete Profile Post Comment
         * @description Delete a profile post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        delete: operations["ProfilePosts.Comments.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts/{profile_post_id}/comments/{comment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Profile Post Comment
         * @description Detail information of a profile post comment.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["ProfilePosts.Comments.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile-posts/comments/{comment_id}/report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Report a Profile Post Comment
         * @description Report a profile post comment.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["ProfilePosts.Comments.Report"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Conversations
         * @description List of conversations (with pagination).
         *
         *     Required scopes:
         *     + **read**
         *     + **conversate**
         */
        get: operations["Conversations.List"];
        /**
         * Edit Conversation
         * @description Edit conversation.
         *
         *     Required scopes:
         *     + **conversate**
         */
        put: operations["Conversations.Update"];
        /**
         * Create Conversation
         * @description Create a new conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        post: operations["Conversations.Create"];
        /**
         * Leave Conversation
         * @description Leave the conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        delete: operations["Conversations.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start Conversation
         * @description Start a new conversation with a user.
         *
         *     Required scopes:
         *     + **conversate**
         */
        post: operations["Conversations.Start"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/save": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Content To Saved Messages
         * @description Send content to Saved Messages.
         *
         *     Required scopes:
         *     + **conversate**
         */
        post: operations["Conversations.Save"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Conversation
         * @description Detail information of a conversation.
         *
         *     Required scopes:
         *     + **read**
         *     + **conversate**
         */
        get: operations["Conversations.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Conversation Messages
         * @description List of messages in a conversation (with pagination).
         *
         *     Required scopes:
         *     + **read**
         *     + **conversate**
         */
        get: operations["Conversations.Messages.List"];
        put?: never;
        /**
         * Create Conversation Message
         * @description Create a new conversation message.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        post: operations["Conversations.Messages.Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Conversations Messages
         * @description Search for conversations messages or recipients.
         *
         *     Required scopes:
         *     + **read**
         *     + **conversate**
         */
        post: operations["Conversations.Search"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Conversation Message
         * @description Detail information of a message.
         *
         *     Required scopes:
         *     + **read**
         *     + **conversate**
         */
        get: operations["Conversations.Messages.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Edit Conversation Message
         * @description Edit a message.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        put: operations["Conversations.Messages.Edit"];
        post?: never;
        /**
         * Delete Conversation Message
         * @description Deletes a message from a conversation.
         *
         *     Required scopes:
         *     + **conversate**
         */
        delete: operations["Conversations.Messages.Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/invite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Invite Users to Conversation
         * @description Invite one or more users to an existing conversation.
         *
         *     Required scopes:
         *     + **conversate**
         *     + **post**
         */
        post: operations["Conversations.Invite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/kick": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Kick User from Conversation
         * @description Kicks a user from a conversation.
         *
         *     Required scopes:
         *     + **conversate**
         */
        post: operations["Conversations.Kick"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Read a Conversation
         * @description Read a specific conversation.
         *
         *     Required scopes:
         *     + **conversate**
         */
        post: operations["Conversations.Read"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/read-all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Read All Conversations
         * @description Mark all conversations as read.
         *
         *     Required scopes:
         *     + **read**
         *     + **conversate**
         */
        post: operations["Conversations.ReadAll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/messages/{message_id}/stick": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stick Conversation Message
         * @description Stick a message in a conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        post: operations["Conversations.Messages.Stick"];
        /**
         * Unstick Conversation Message
         * @description Unstick a message in a conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        delete: operations["Conversations.Messages.Unstick"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/star": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Star Conversation
         * @description Star conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        post: operations["Conversations.Star"];
        /**
         * Unstar Conversation
         * @description Unstar conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        delete: operations["Conversations.Unstar"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversation_id}/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enable Conversation Alerts
         * @description Enable alerts for conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        post: operations["Conversations.Alerts.Enable"];
        /**
         * Disable Conversation Alerts
         * @description Disable alerts for conversation.
         *
         *     Required scopes:
         *     + **post**
         *     + **conversate**
         */
        delete: operations["Conversations.Alerts.Disable"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Notifications
         * @description List of notifications (both read and unread).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Notifications.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications/{notification_id}/content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Notification
         * @description Get associated content of notification. The response depends on the content type.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Notifications.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mark Notification Read
         * @description Mark single notification or all existing notifications read.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Notifications.Read"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Popular Tags
         * @description List of popular tags (no pagination).
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Tags.Popular"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Tags
         * @description List of tags.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Tags.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/{tag_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Tagged Content
         * @description List of tagged contents.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Tags.Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/find": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Filtered Content
         * @description Filtered list of tags.
         *
         *     Required scopes:
         *     + **read**
         */
        get: operations["Tags.Find"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search
         * @description Search for all supported contents.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Search.All"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/threads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Thread
         * @description Search for threads.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Search.Threads"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Post
         * @description Search for posts.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Search.Posts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Users
         * @description Search for users.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Search.Users"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/profile-posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Profile Posts
         * @description Search for profile posts.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Search.ProfilePosts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/tagged": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Tagged
         * @description Search for tagged contents.
         *
         *     Required scopes:
         *     + **post**
         */
        post: operations["Search.Tagged"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/{search_id}/results": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Search Results
         * @description List of search results (with pagination).
         *
         *     Required scopes:
         *     + **get**
         */
        get: operations["Search.Results"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Batch
         * @description Execute multiple API requests at once (Separated by comma). Maximum batch jobs is 10.
         *
         *     Required scopes:
         *     + Same as called API requests.
         */
        post: operations["Batch.Execute"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatbox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Chats
         * @description Get chat rooms.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        get: operations["Chatbox.Index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatbox/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Chat Messages
         * @description Get chat messages.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        get: operations["Chatbox.GetMessages"];
        /**
         * Edit Chat Message
         * @description Edit chat message.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        put: operations["Chatbox.EditMessage"];
        /**
         * Create Chat Message
         * @description Create chat message.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        post: operations["Chatbox.PostMessage"];
        /**
         * Delete Chat Message
         * @description Delete chat message.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        delete: operations["Chatbox.DeleteMessage"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatbox/messages/online": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Chat Online
         * @description Get chat Online Users.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        get: operations["Chatbox.Online"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatbox/messages/report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Chat Message Report Reasons
         * @description Report chat message.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        get: operations["Chatbox.ReportReasons"];
        put?: never;
        /**
         * Report Chat Message
         * @description Report chat message.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        post: operations["Chatbox.Report"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatbox/messages/leaderboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Chat Leaderboard
         * @description Get chat leaderboard.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        get: operations["Chatbox.GetLeaderboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatbox/ignore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Ignored Chat Users
         * @description Get list of ignored chat users.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        get: operations["Chatbox.GetIgnore"];
        put?: never;
        /**
         * Ignore Chat User
         * @description Ignore chat user.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        post: operations["Chatbox.PostIgnore"];
        /**
         * Unignore Chat User
         * @description Unignore chat user.
         *
         *     Required scopes:
         *     + **chatbox**
         */
        delete: operations["Chatbox.DeleteIgnore"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Forms List
         * @description Get Forms List
         */
        get: operations["Forms.List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/save": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Form
         * @description Create Form.
         */
        post: operations["Forms.Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** user_id */
        UserIDModel: string | number;
        Resp_NotificationModel: {
            /** Notification */
            notification_id: number;
            /** Notification */
            notification_create_date: number;
            /** Content */
            content_type: string;
            /** Content */
            content_id: number;
            /** Content */
            content_action: string;
            /** Notification */
            notification_is_unread: boolean;
            /** Creator */
            creator_user_id: number;
            /** Creator */
            creator_username: string;
            /** Creator */
            creator_username_html: string;
            /** Notification */
            notification_type: string;
            /** Links */
            links: {
                /** Content */
                content: string;
                /** Creator */
                creator_avatar: string;
            };
            /** Notification */
            notification_html: string;
        };
        Resp_LinkModel: {
            /** Link */
            link_id: number;
            /** Link */
            link_title: string;
            /** Link */
            link_description: string;
            /** Links */
            links: {
                /** Target */
                target: string;
                /** Detail */
                detail: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
            };
        };
        /**
         * @description Room ID.
         * @enum {integer}
         */
        RoomIDModel: 1 | 2 | 3 | 4 | 13;
        Resp_ChatboxMessageModel: {
            /** Can */
            can_report: boolean;
            /** Date */
            date: number;
            /** Is */
            is_deleted: boolean;
            /** Message */
            message: string;
            /** Message */
            message_id: number;
            /** Message Json */
            messageJson: string;
            /** Message Raw */
            messageRaw: string;
            /** Room */
            room: {
                /** Can */
                can_report: boolean;
                /** Eng */
                eng: boolean;
                /** Market */
                market: boolean;
                /** Room */
                room_id: number;
                /** Title */
                title: string;
            };
            /** User */
            user: {
                /** Avatar */
                avatar_date: number;
                /** Background */
                background_date: number;
                /** Contest */
                contest_count: number;
                /** Custom */
                custom_title: string;
                /** Display */
                display_banner_id: number;
                /** Display */
                display_icon_group_id: number;
                /** Display */
                display_style_group_id: number;
                /** Is */
                is_admin: boolean;
                /** Is */
                is_banned: boolean;
                /** Is */
                is_moderator: boolean;
                /** Is */
                is_staff: boolean;
                /** Last */
                last_activity: number;
                /** Like */
                like2_count: number;
                /** Like */
                like_count: number;
                /** Message */
                message_count: number;
                /** Register */
                register_date: number;
                /** Rendered */
                rendered: {
                    /** Username */
                    username: string;
                    /** Avatars */
                    avatars: {
                        /** L */
                        l: string;
                        /** M */
                        m: string;
                        /** S */
                        s: string;
                    };
                    /** Link */
                    link: string;
                };
                /** Short */
                short_link: string;
                /** Trophy */
                trophy_points: number;
                /** Uniq */
                uniq_banner: {
                    /** Banner */
                    banner_css: string;
                    /** Banner */
                    banner_text: string;
                    /** Banner */
                    banner_icon: string;
                    /** Username */
                    username_icon: string;
                };
                /** Uniq */
                uniq_username_css: string;
                /** User */
                user_id: number;
                /** Username */
                username: string;
            };
        };
        Resp_UserModel: {
            /** User */
            user_id: number;
            /** Username */
            username: string;
            /** Username */
            username_html: string;
            /** User */
            user_message_count: number;
            /** User */
            user_register_date: number;
            /** User */
            user_like_count: number;
            /** User */
            user_like2_count: number;
            /** Contest */
            contest_count: number;
            /** Trophy */
            trophy_count: number;
            /** Short */
            short_link: string;
            /** Custom */
            custom_title: string;
            /** Is */
            is_banned: number;
            /** Display */
            display_banner_id: number;
            /** Display */
            display_icon_group_id: number;
            /** Balance */
            balance: string;
            /** Hold */
            hold: string;
            /** Currency */
            currency: string;
            /** User */
            user_email: string;
            /** User */
            user_unread_notification_count: number;
            /** User */
            user_unread_conversation_count: number;
            /** Conv */
            conv_welcome_message: string;
            /** User */
            user_title: string;
            /** User */
            user_deposit: number;
            /** User */
            user_is_valid: boolean;
            /** User */
            user_is_verified: boolean;
            /** User */
            user_is_followed: boolean;
            /** User */
            user_last_seen_date: number;
            /** Links */
            links: {
                /** Permalink */
                permalink: string;
                /** Detail */
                detail: string;
                /** Avatar */
                avatar: string;
                /** Avatar */
                avatar_big: string;
                /** Avatar */
                avatar_small: string;
                /** Followers */
                followers: string;
                /** Followings */
                followings: string;
                /** Ignore */
                ignore: string;
                /** Background Large */
                background_l: string;
                /** Background Medium */
                background_m: string;
                /** Status */
                status: string;
                /** Timeline */
                timeline: string;
            };
            /** Permissions */
            permissions: {
                /** Edit */
                edit: boolean;
                /** Follow */
                follow: boolean;
                /** Ignore */
                ignore: boolean;
                /** Profile */
                profile_post: boolean;
            };
            /** User */
            user_is_ignored: boolean;
            /** User */
            user_is_visitor: boolean;
            /** User */
            user_group_id: number;
            /** Curator */
            curator_titles: string[];
            /** User */
            user_groups: {
                /** User */
                user_group_id: number;
                /** User */
                user_group_title: string;
                /** User */
                user_group_title_en: string;
                /** User */
                user_group_banner_css_class: string;
                /** User */
                user_group_banner_text: string;
                /** User */
                user_group_banner_text_en: string;
                /** Display */
                display_group_selectable: boolean;
                /** Display */
                display_banner_selectable: boolean;
                /** Display */
                display_icon_selectable: boolean;
                /** Is */
                is_primary_group: boolean;
                /** User */
                user_group_icon_class: string;
            }[];
            /** Fields */
            fields: {
                /** Id */
                id: string;
                /** Title */
                title: string;
                /** Description */
                description: string;
                /** Position */
                position: string;
                /** Is */
                is_required: boolean;
                /** Value */
                value?: string;
                /** Is */
                is_multi_choice: boolean;
                /** Choices */
                choices: {
                    /** Key */
                    key: string;
                    /** Value */
                    value: string;
                }[];
                /** Values */
                values: unknown[];
            }[];
            /** User */
            user_timezone_offset: number;
            /** User */
            user_external_authentications: {
                /** Provider */
                provider: string;
                /** Provider */
                provider_key: string;
            }[];
            /** Self */
            self_permissions: {
                /** Create */
                create_conversation: boolean;
            };
            /** Edit */
            edit_permissions: {
                /** Password */
                password: boolean;
                /** User */
                user_email: boolean;
                /** Username */
                username: boolean;
                /** User */
                user_title: boolean;
                /** Short */
                short_link: boolean;
                /** Hide */
                hide_username_logs: boolean;
                /** Primary */
                primary_group_id: boolean;
                /** Secondary */
                secondary_group_ids: boolean;
                /** User */
                user_dob_day: boolean;
                /** User */
                user_dob_month: boolean;
                /** User */
                user_dob_year: boolean;
                /** Fields */
                fields: boolean;
            };
            /** Birthday */
            birthday: {
                /** Age */
                age: number;
                /** Time Stamp */
                timeStamp: {
                    /** Date */
                    date: string;
                    /** Timezone */
                    timezone_type: number;
                    /** Timezone */
                    timezone: string;
                };
                /** Format */
                format: string;
            };
            /** Secret */
            secret_answer_rendered: string;
            /** Secret */
            secret_answer_first_letter: string;
            /** User */
            user_following: {
                /** Users */
                users: {
                    /** User */
                    user_id: number;
                    /** Username */
                    username: string;
                    /** Username */
                    username_html: string;
                    /** Avatar */
                    avatar: string;
                }[];
                /** Count */
                count: number;
            };
            /** User */
            user_followers: {
                /** Users */
                users: {
                    /** User */
                    user_id: number;
                    /** Username */
                    username: string;
                    /** Username */
                    username_html: string;
                    /** Avatar */
                    avatar: string;
                }[];
                /** Count */
                count: number;
            };
            /** Banner */
            banner: string;
        };
        Resp_ThreadModel: {
            /** Thread */
            thread_id: number;
            /** Forum */
            forum_id: number;
            /** Thread */
            thread_title: string;
            /** Thread */
            thread_view_count: number;
            /** Creator */
            creator_user_id: number;
            /** Creator */
            creator_username: string;
            /** Creator */
            creator_username_html: string;
            /** Thread */
            thread_create_date: number;
            /** Thread */
            thread_update_date: number;
            /** User */
            user_is_ignored: boolean;
            /** Thread */
            thread_post_count: number;
            /** Thread */
            thread_is_published: boolean;
            /** Thread */
            thread_is_deleted: boolean;
            /** Thread */
            thread_is_sticky: boolean;
            /** Thread */
            thread_is_closed: boolean;
            /** Thread */
            thread_is_followed: boolean;
            /** Thread */
            thread_is_starred: boolean;
            /** First */
            first_post: {
                /** Post */
                post_id: number;
                /** Thread */
                thread_id: number;
                /** Poster */
                poster_user_id: number;
                /** Poster */
                poster_username: string;
                /** Poster */
                poster_username_html: string;
                /** Post */
                post_create_date: number;
                /** Post */
                post_body: string;
                /** Post */
                post_body_html: string;
                /** Post */
                post_body_plain_text: string;
                /** Signature */
                signature: string;
                /** Signature */
                signature_html: string;
                /** Signature */
                signature_plain_text: string;
                /** Post */
                post_like_count: number;
                /** User */
                user_is_ignored: boolean;
                /** Post */
                post_is_published: boolean;
                /** Post */
                post_is_deleted: boolean;
                /** Post */
                post_update_date: number;
                /** Post */
                post_is_first_post: boolean;
                /** Post */
                post_is_liked: boolean;
                /** Links */
                links: {
                    /** Permalink */
                    permalink: string;
                    /** Detail */
                    detail: string;
                    /** Thread */
                    thread: string;
                    /** Poster */
                    poster: string;
                    /** Likes */
                    likes: string;
                    /** Report */
                    report: string;
                    /** Poster */
                    poster_avatar: string;
                };
                /** Permissions */
                permissions: {
                    /** View */
                    view: boolean;
                    /** Edit */
                    edit: boolean;
                    /** Delete */
                    delete: boolean;
                    /** Reply */
                    reply: boolean;
                    /** Like */
                    like: boolean;
                    /** Report */
                    report: boolean;
                };
                /** Thread */
                thread_is_deleted: boolean;
            };
            /** Thread */
            thread_prefixes: {
                /** Prefix */
                prefix_id: number;
                /** Prefix */
                prefix_title: string;
            }[];
            /** Thread */
            thread_tags: {
                [key: string]: string;
            };
            /** Links */
            links: {
                /** Permalink */
                permalink: string;
                /** Detail */
                detail: string;
                /** Followers */
                followers: string;
                /** Forum */
                forum: string;
                /** Posts */
                posts: string;
                /** First */
                first_poster: string;
                /** First */
                first_poster_avatar: string;
                /** First */
                first_post: string;
                /** Last */
                last_post: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Delete */
                delete: boolean;
                /** Follow */
                follow: boolean;
                /** Post */
                post: boolean;
                /** Edit */
                edit: boolean;
                /** Edit */
                edit_title: boolean;
                /** Edit */
                edit_tags: boolean;
                bump: {
                    /** Can */
                    can: boolean;
                    /** Available */
                    available_count: number;
                    /** Error */
                    error: string;
                    /** Next */
                    next_available_time: number;
                };
            };
            /** Node */
            node_title: string;
            forum?: components["schemas"]["Resp_ForumModel"];
            /** Restrictions */
            restrictions?: {
                /** Reply */
                reply_delay: number;
                /** Max */
                max_reply_count: number;
            };
            contest?: {
                /** Type */
                type: string;
                /** Finish */
                finish_date: number;
                /** Now */
                now_count_members: number;
                /** Needed */
                needed_members: number;
                /** Is */
                is_finished: number;
                /** Count */
                count_winners: number;
                /** Require */
                require_like_count: number;
                /** Require */
                require_total_like_count: number;
                /** Prize */
                prize_type: string;
                /** Prize */
                prize_type_phrase: string;
                /** Prize */
                prize_data: number;
                /** Is */
                is_money_places: number;
                /** Chance */
                chance_to_win: number;
                /** Winners */
                winners?: number[];
                /** Already */
                already_participate: boolean;
                /** Permissions */
                permissions: {
                    /** Can */
                    can_finish: boolean;
                    /** Can */
                    can_participate: boolean;
                    /** Can */
                    can_participate_error: string;
                    /** Can */
                    can_view_user_list: boolean;
                };
            };
        };
        Resp_PostModel: {
            /** Post */
            post_id: number;
            /** Thread */
            thread_id: number;
            /** Poster */
            poster_user_id: number;
            /** Poster */
            poster_username: string;
            /** Poster */
            poster_username_html: string;
            /** Post */
            post_create_date: number;
            /** Post */
            post_body: string;
            /** Post */
            post_body_html: string;
            /** Post */
            post_body_plain_text: string;
            /** Signature */
            signature: string;
            /** Signature */
            signature_html: string;
            /** Signature */
            signature_plain_text: string;
            /** Post */
            post_like_count: number;
            /** User */
            user_is_ignored: boolean;
            /** Post */
            post_is_published: boolean;
            /** Post */
            post_is_deleted: boolean;
            /** Post */
            post_update_date: number;
            /** Post */
            post_is_first_post: boolean;
            /** Links */
            links: {
                /** Permalink */
                permalink: string;
                /** Detail */
                detail: string;
                /** Thread */
                thread: string;
                /** Poster */
                poster: string;
                /** Likes */
                likes: string;
                /** Report */
                report: string;
                /** Poster */
                poster_avatar: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Edit */
                edit: boolean;
                /** Delete */
                delete: boolean;
                /** Reply */
                reply: boolean;
                /** Like */
                like: boolean;
                /** Report */
                report: boolean;
            };
            /** Thread */
            thread_is_deleted: boolean;
        };
        Resp_PostCommentModel: {
            /** Post */
            post_comment_id: number;
            /** Post */
            post_id: number;
            /** Thread */
            thread_id: number;
            /** Poster */
            poster_user_id: number;
            /** Poster */
            poster_username: string;
            /** Poster */
            poster_username_html: string;
            /** Post */
            post_comment_create_date: number;
            /** Post */
            post_comment_body: string;
            /** Post */
            post_comment_body_html: string;
            /** Post */
            post_comment_body_plain_text: string;
            /** Post */
            post_comment_like_count: number;
            /** User */
            user_is_ignored: boolean;
            /** Post */
            post_comment_is_published: boolean;
            /** Post */
            post_comment_is_deleted: boolean;
            /** Post */
            post_comment_update_date: number;
            /** Links */
            links: {
                /** Permalink */
                permalink: string;
                /** Detail */
                detail: string;
                /** Post */
                post: string;
                /** Thread */
                thread: string;
                /** Poster */
                poster: string;
                /** Likes */
                likes: string;
                /** Report */
                report: string;
                /** Poster */
                poster_avatar: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Edit */
                edit: boolean;
                /** Delete */
                delete: boolean;
                /** Reply */
                reply: boolean;
                /** Like */
                like: boolean;
                /** Report */
                report: boolean;
            };
        };
        Resp_ProfilePostModel: {
            /** Profile */
            profile_post_id: number;
            /** Timeline */
            timeline_user_id: number;
            /** Poster */
            poster_user_id: number;
            /** Poster */
            poster_username: string;
            /** Poster */
            poster_username_html: string;
            /** Post */
            post_create_date: number;
            /** Post */
            post_body: string;
            /** Post */
            post_body_html: string;
            /** Post */
            post_body_plain_text: string;
            /** Post */
            post_like_count: number;
            /** Post */
            post_comment_count: number;
            /** Post */
            post_comments_is_disabled: number;
            /** Timeline */
            timeline_username: string;
            /** User */
            user_is_ignored: boolean;
            /** Post */
            post_is_published: boolean;
            /** Post */
            post_is_deleted: boolean;
            /** Post */
            post_is_liked: boolean;
            /** Post */
            post_is_sticked: boolean;
            /** Links */
            links: {
                /** Permalink */
                permalink: string;
                /** Detail */
                detail: string;
                /** Timeline */
                timeline: string;
                /** Timeline */
                timeline_user: string;
                /** Poster */
                poster: string;
                /** Likes */
                likes: string;
                /** Comments */
                comments: string;
                /** Report */
                report: string;
                /** Poster */
                poster_avatar: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Edit */
                edit: boolean;
                /** Delete */
                delete: boolean;
                /** Like */
                like: boolean;
                /** Comment */
                comment: boolean;
                /** Report */
                report: boolean;
                /** Stick */
                stick: boolean;
            };
            timeline_user: components["schemas"]["Resp_UserModel"];
        };
        Resp_ProfilePostCommentModel: {
            /** Comment */
            comment_id: number;
            /** Profile */
            profile_post_id: number;
            /** Comment */
            comment_user_id: number;
            /** Comment */
            comment_username: string;
            /** Comment */
            comment_username_html: string;
            /** Comment */
            comment_create_date: number;
            /** Comment */
            comment_body: string;
            /** Comment */
            comment_body_html: string;
            /** Comment */
            comment_body_plain_text: string;
            /** User */
            user_is_ignored: boolean;
            /** Timeline */
            timeline_user_id: number;
            /** Links */
            links: {
                /** Detail */
                detail: string;
                /** Profile */
                profile_post: string;
                /** Timeline */
                timeline: string;
                /** Timeline */
                timeline_user: string;
                /** Poster */
                poster: string;
                /** Poster */
                poster_avatar: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Delete */
                delete: boolean;
            };
        };
        Resp_ConversationModel: {
            /** Conversation */
            conversation_id: number;
            /** Conversation */
            conversation_title: string;
            /** Creator */
            creator_user_id: number;
            /** Creator */
            creator_username: string;
            /** Creator */
            creator_username_html: string;
            /** Conversation */
            conversation_create_date: number;
            /** Conversation */
            conversation_update_date: number;
            /** Conversation */
            conversation_last_read_date: number;
            /** Conversation */
            conversation_online_count: number;
            /** Is */
            is_starred: number;
            /** Is */
            is_group: number;
            /** Is */
            is_unread: number;
            /** Alerts */
            alerts: number;
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Reply */
                reply: boolean;
                /** Invite */
                invite: boolean;
                /** Manage */
                manage_invite_links: boolean;
                /** Kick */
                kick: boolean;
                /** Upload */
                upload_avatar: boolean;
                /** Edit Own Post */
                editOwnPost: boolean;
                /** Sticky Messages */
                stickyMessages: boolean;
            };
            /** Conversation */
            conversation_message_count: number;
            /** Conversation */
            conversation_is_new: boolean;
            /** Creator */
            creator_is_ignored: boolean;
            /** Conversation */
            conversation_is_open: boolean;
            /** Conversation */
            conversation_is_deleted: boolean;
            /** Recipient */
            recipient: {
                /** User */
                user_id: number;
                /** Username */
                username: string;
                /** Username */
                username_html: string;
                /** Last */
                last_activity: number;
                /** Is */
                is_online: boolean;
                /** Contacts */
                contacts_changed: boolean;
                /** Avatar */
                avatar: string;
            };
            /** Recipients */
            recipients: {
                /** User */
                user_id: number;
                /** Username */
                username: string;
                /** Username */
                username_html: string;
                /** Last */
                last_activity: number;
                /** Is */
                is_online: boolean;
                /** Contacts */
                contacts_changed: boolean;
                /** Avatar */
                avatar: string;
            }[];
            /** Links */
            links: {
                /** Permalink */
                permalink: string;
                /** Detail */
                detail: string;
                /** Messages */
                messages: string;
                /** Avatar */
                avatar: string;
            };
        };
        Resp_ConversationMessageModel: {
            /** Message */
            message_id: number;
            /** Conversation */
            conversation_id: number;
            /** Creator */
            creator_user_id: number;
            /** Creator */
            creator_username: string;
            /** Creator */
            creator_username_html: string;
            /** Message */
            message_create_date: number;
            /** Message */
            message_is_unread: number;
            /** Message */
            message_need_translate: boolean;
            /** Message */
            message_is_system: boolean;
            /** Message */
            message_edit_date: number;
            /** Message */
            message_body: string;
            /** Message */
            message_body_html: string;
            /** Message */
            message_body_plain_text: string;
            /** User */
            user_is_ignored: boolean;
            /** Links */
            links: {
                /** Detail */
                detail: string;
                /** Conversation */
                conversation: string;
                /** Creator */
                creator: string;
                /** Creator */
                creator_avatar: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Edit */
                edit: boolean;
                /** Delete */
                delete: boolean;
                /** Stick */
                "stick-unstick": boolean;
            };
        };
        Resp_ForumModel: {
            /** Forum */
            forum_id: number;
            /** Forum */
            forum_title: string;
            /** Forum */
            forum_description: string;
            /** Forum */
            forum_thread_count: number;
            /** Forum */
            forum_post_count: number;
            /** Parent */
            parent_node_id: number;
            /** Node */
            node_type_id: string;
            /** Icon */
            icon_content: string;
            /** Active */
            active_icon_content: string;
            /** Forum */
            forum_rules_thread_id: number;
            /** Forum */
            forum_prefixes: {
                /** Group */
                group_title: string;
                /** Group */
                group_prefixes: {
                    /** Prefix */
                    prefix_id: number;
                    /** Css */
                    css_class: string;
                    /** Prefix */
                    prefix_title: string;
                }[];
            }[];
            /** Thread */
            thread_default_prefix_id: number;
            /** Thread */
            thread_prefix_is_required: boolean;
            /** Links */
            links: {
                /** Permalink */
                permalink: string;
                /** Detail */
                detail: string;
                /** Sub */
                "sub-categories": string;
                /** Sub */
                "sub-forums": string;
                /** Threads */
                threads: string;
                /** Followers */
                followers: string;
            };
            /** Permissions */
            permissions: {
                /** View */
                view: boolean;
                /** Edit */
                edit: boolean;
                /** Delete */
                delete: boolean;
                /** Create */
                create_thread: boolean;
                /** Tag */
                tag_thread: boolean;
                /** Follow */
                follow: boolean;
            };
            /** Forum */
            forum_is_followed: boolean;
        };
        Resp_SystemInfo: {
            visitor_id: number;
            time: number;
        };
    };
    responses: {
        /** @description Successful Response. */
        SaveChanges: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /**
                     * Status
                     * @default ok
                     */
                    status: string;
                    /**
                     * Message
                     * @default Changes Saved
                     */
                    message: string;
                    system_info?: components["schemas"]["Resp_SystemInfo"];
                };
            };
        };
        /** @description Error Response. */
        NoPermission: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    errors?: string[];
                    system_info?: components["schemas"]["Resp_SystemInfo"];
                };
            };
        };
        /** @description Unauthorized */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    errors?: string[];
                };
            };
        };
        /** @description Not Found */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** Errors */
                    errors: string[];
                    system_info: components["schemas"]["Resp_SystemInfo"];
                };
            };
        };
    };
    parameters: {
        /** @description Id of thread. */
        thread_id: number;
        /**
         * @description User ID.
         *     > You can use shortlink `me` to interact with your profile.
         */
        user_id: components["schemas"]["UserIDModel"];
        /**
         * @description User ID.
         *     > You can use shortlink `me` to interact with your profile.
         */
        user_id_path: components["schemas"]["UserIDModel"];
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "OAuth.Token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /**
                     * @description Grant type.
                     * @enum {string}
                     */
                    grant_type: "client_credentials";
                    /** @description Client ID. */
                    client_id: string;
                    /** @description Client secret. */
                    client_secret: string;
                    /** @description Scope. */
                    scope: ("basic" | "read" | "post" | "conversate" | "market" | "payment" | "invoice")[];
                } | {
                    /**
                     * @description Grant type.
                     * @enum {string}
                     */
                    grant_type: "authorization_code";
                    /** @description Authorization code. */
                    code: string;
                    /** @description Client ID. */
                    client_id: string;
                    /** @description Client secret. */
                    client_secret: string;
                    /** @description Redirect URI. */
                    redirect_uri: string;
                    /** @description Scope. */
                    scope: ("basic" | "read" | "post" | "conversate" | "market" | "payment" | "invoice")[];
                } | {
                    /**
                     * @description Grant type.
                     * @enum {string}
                     */
                    grant_type: "refresh_token";
                    /** @description Refresh token. */
                    refresh_token: string;
                    /** @description Client ID. */
                    client_id: string;
                    /** @description Client secret. */
                    client_secret: string;
                } | {
                    /**
                     * @description Grant type.
                     * @enum {string}
                     */
                    grant_type: "password";
                    /** @description Account username/email. */
                    username: string;
                    /** @description Account password. */
                    password: string;
                    /** @description Client ID. */
                    client_id: string;
                    /** @description Client secret. */
                    client_secret: string;
                    /** @description Scope. */
                    scope: ("basic" | "read" | "post" | "conversate" | "market" | "payment" | "invoice")[];
                };
            };
        };
        responses: {
            /** @description Successful token response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The access token issued by the authorization server */
                        access_token: string;
                        /**
                         * @description The type of the token
                         * @example Bearer
                         */
                        token_type: string;
                        /** @description The lifetime in seconds of the access token */
                        expires_in: number;
                        /** @description The refresh token, which can be used to obtain new access tokens */
                        refresh_token?: string;
                        /** @description The scope of the access token */
                        scope?: string;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error code */
                        error?: string;
                        /** @description Human-readable error description */
                        error_description?: string;
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error code */
                        error?: string;
                        /** @description Human-readable error description */
                        error_description?: string;
                    };
                };
            };
        };
    };
    "Assets.Css": {
        parameters: {
            query?: {
                /** @description The names or identifiers of the CSS selectors to retrieve. */
                css?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Contents */
                        contents: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    "Categories.List": {
        parameters: {
            query?: {
                /** @description Id of parent category. If exists, filter categories that are direct children of that category. */
                parent_category_id?: number;
                /** @description Id of parent forum. If exists, filter categories that are direct children of that forum. */
                parent_forum_id?: number;
                /** @description Ordering of categories. */
                order?: "natural" | "list";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Categories */
                        categories: {
                            /** Category */
                            category_id: number;
                            /** Category */
                            category_title: string;
                            /** Category */
                            category_description: string;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Sub */
                                "sub-categories": string;
                                /** Sub */
                                "sub-forums": string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                        }[];
                        /** Categories */
                        categories_total: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Categories.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of category. */
                category_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Category */
                        category: {
                            /** Category */
                            category_id: number;
                            /** Category */
                            category_title: string;
                            /** Category */
                            category_description: string;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Sub */
                                "sub-categories": string;
                                /** Sub */
                                "sub-forums": string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Forums.List": {
        parameters: {
            query?: {
                /** @description Id of parent category. If exists, filter forums that are direct children of that category. */
                parent_category_id?: number;
                /** @description Id of parent forum. If exists, filter forums that are direct children of that forum. */
                parent_forum_id?: number;
                /** @description Ordering of forums. */
                order?: "natural" | "list";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Forums */
                        forums: components["schemas"]["Resp_ForumModel"][];
                        /** Forums */
                        forums_total: number;
                        /** Tabs */
                        tabs: {
                            /** Link */
                            link_title: string;
                            /** Is Default */
                            isDefault: boolean;
                            /** Title */
                            title: string;
                            /** Is Hidden */
                            isHidden: boolean;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Forums.Grouped": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Resp_ForumModel"][][];
                        tabs: {
                            node_ids: string;
                            title: string;
                            link_title: string;
                            isExtendedTab: boolean;
                            prefixes: unknown[];
                            prefixes_not: unknown[];
                            order: string;
                            direction: string;
                            period: string;
                            state: string;
                            q: string;
                            tabLink: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    "Forums.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of forum. */
                forum_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forum: components["schemas"]["Resp_ForumModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Forums.Followers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of forum. */
                forum_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                            /** Follow */
                            follow: {
                                /** Post */
                                post: boolean;
                                /** Alert */
                                alert: boolean;
                                /** Email */
                                email: boolean;
                            };
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Forums.Follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of forum. */
                forum_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Post
                     * @description Whether to receive notification for post.
                     */
                    post?: boolean;
                    /**
                     * Alert
                     * @description Whether to receive notification as alert.
                     */
                    alert?: boolean;
                    /**
                     * Email
                     * @description Whether to receive notification as email.
                     */
                    email?: boolean;
                    /**
                     * Prefix ids
                     * @description Prefix ids.
                     */
                    prefix_ids?: number[];
                    /**
                     * Minimal Contest Amount
                     * @description Minimal contest amount. (Only for 766 forumId)
                     */
                    minimal_contest_amount?: number;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Forums.Unfollow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of forum. */
                forum_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Forums.Followed": {
        parameters: {
            query?: {
                /** @description If included in the request, only the forum count is returned as **forums_total**. */
                total?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Forums */
                        forums: components["schemas"]["Resp_ForumModel"][];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Forums.GetFeedOptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Forums */
                        forums: components["schemas"]["Resp_ForumModel"][];
                        /** Excluded */
                        excluded_forums_ids: number[];
                        /** Default */
                        default_excluded_forums_ids: number[];
                        /** Keywords */
                        keywords: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    "Forums.EditFeedOptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Array of forum ids to exclude from the feed. */
                    node_ids?: number[];
                    /**
                     * Keywords
                     * @description List of keywords to exclude specific threads from the feed.
                     */
                    keywords?: string[];
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
        };
    };
    "Links.List": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Link */
                        "link-forums": components["schemas"]["Resp_LinkModel"][];
                        /** Link */
                        "link-forums_total": number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    "Links.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of link forum. */
                link_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "link-forum": components["schemas"]["Resp_LinkModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    "Pages.List": {
        parameters: {
            query?: {
                /** @description Id of parent page. If exists, filter pages that are direct children of that page. */
                parent_page_id?: number;
                /** @description Ordering of pages. */
                order?: "natural" | "list";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Pages */
                        pages: {
                            /** Page */
                            page_id: number;
                            /** Page */
                            page_title: string;
                            /** Page */
                            page_description: string;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Sub */
                                "sub-pages": string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                        }[];
                        /** Pages */
                        pages_total: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Pages.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of page. */
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Page */
                        page: {
                            /** Page */
                            page_id: number;
                            /** Page */
                            page_title: string;
                            /** Page */
                            page_description: string;
                            /** Page */
                            page_view_count: number;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Sub */
                                "sub-pages": string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                            /** Page */
                            page_html: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Navigation.List": {
        parameters: {
            query?: {
                /** @description Id of parent element. If exists, filter elements that are direct children of that element. */
                parent?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Elements */
                        elements: {
                            /** Category */
                            category_id: number;
                            /** Category */
                            category_title: string;
                            /** Category */
                            category_description: string;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Sub */
                                "sub-categories": string;
                                /** Sub */
                                "sub-forums": string;
                                /** Sub */
                                "sub-elements": string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                            /** Navigation */
                            navigation_type: string;
                            /** Navigation */
                            navigation_id: number;
                            /** Navigation */
                            navigation_parent_id: number;
                            /** Has */
                            has_sub_elements: boolean;
                        }[];
                        /** Elements */
                        elements_count: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.List": {
        parameters: {
            query?: {
                /** @description Id of the containing forum. */
                forum_id?: number;
                /** @description Tab to get threads from. */
                tab?: string;
                /** @description Thread state. Works only if **forum_id** is set. */
                state?: "active" | "closed";
                /** @description Filter to get only threads created within the selected period. Works only if **forum_id** is set. */
                period?: "day" | "week" | "month" | "year";
                /** @description Thread title. */
                title?: string;
                /** @description Search only in titles. */
                title_only?: boolean;
                /** @description Filter to get only threads created by the specified user. */
                creator_user_id?: number;
                /** @description Filter to get only sticky or non-sticky threads. By default, all threads will be included and sticky ones will be at the top of the result on the first page. In mixed mode, sticky threads are not counted towards **threads_total** and does not affect pagination. */
                sticky?: boolean;
                /** @description Filter to get only threads with the specified prefix. */
                "prefix_ids[]"?: number[];
                /** @description Filter to get only threads without the specified prefix. */
                "prefix_ids_not[]"?: number[];
                /** @description Filter to get only threads with the specified tag. */
                thread_tag_id?: number;
                /** @description Page number of threads. */
                page?: number;
                /** @description Number of threads in a page. */
                limit?: number;
                /** @description Ordering of threads. */
                order?: "post_date" | "last_post_date" | "reply_count" | "reply_count_asc" | "first_post_likes" | "vote_count";
                /** @description Direction of threads ordering. */
                direction?: "asc" | "desc";
                /** @description Filter threads by creation date. Only works with 'thread_create_date' and 'thread_create_date_reverse' ordering. */
                thread_create_date?: number;
                /** @description Filter threads by update date. Only works with 'thread_update_date' and 'thread_update_date_reverse' ordering. */
                thread_update_date?: number;
                /** @description List of fields to include. */
                fields_include?: ("*" | "latest_posts")[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Threads */
                        threads: components["schemas"]["Resp_ThreadModel"][];
                        /** Forum */
                        forum: {
                            /** Forum */
                            forum_id: number;
                            /** Forum */
                            forum_title: string;
                            /** Forum */
                            forum_description: string;
                            /** Forum */
                            forum_thread_count: number;
                            /** Forum */
                            forum_post_count: number;
                            /** Forum */
                            forum_prefixes: unknown[];
                            /** Thread */
                            thread_default_prefix_id: number;
                            /** Thread */
                            thread_prefix_is_required: boolean;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Sub */
                                "sub-categories": string;
                                /** Sub */
                                "sub-forums": string;
                                /** Threads */
                                threads: string;
                                /** Followers */
                                followers: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Create */
                                create_thread: boolean;
                                /** Upload */
                                upload_attachment: boolean;
                                /** Tag */
                                tag_thread: boolean;
                                /** Follow */
                                follow: boolean;
                            };
                            /** Forum */
                            forum_is_followed: boolean;
                        };
                        /** Threads */
                        threads_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Post Body
                     * @description Content of the new thread.
                     */
                    post_body: string;
                    /**
                     * Forum Id
                     * @description Id of the target forum.
                     */
                    forum_id: number;
                    /**
                     * Thread Title
                     * @description Thread title. Can be skipped if **title_en** set.
                     */
                    title?: string;
                    /**
                     * Thread Title English
                     * @description Thread english title. Can be skipped if **title** set.
                     */
                    title_en?: string;
                    /**
                     * Thread Prefix Id
                     * @description Prefix ids.
                     */
                    prefix_id?: number[];
                    /**
                     * Thread Tags
                     * @description Thread tags.
                     */
                    tags?: string[];
                    /**
                     * Hide contacts
                     * @description Hide contacts.
                     */
                    hide_contacts?: boolean;
                    /**
                     * Allow ask hidden content
                     * @description Allow ask hidden content.
                     */
                    allow_ask_hidden_content?: boolean;
                    /**
                     * Reply group
                     * @description Allow to reply only users with chosen or higher group.
                     * @default 2
                     * @enum {integer}
                     */
                    reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
                    /**
                     * Comment ignore group
                     * @description Allow commenting if user can't post in thread.
                     */
                    comment_ignore_group?: boolean;
                    /**
                     * Don't alert followers
                     * @description Don't alert followers about thread creation.
                     */
                    dont_alert_followers?: boolean;
                    /**
                     * Schedule date
                     * @description Date to schedule thread creation (format: `DD-MM-YYYY`).
                     */
                    schedule_date?: string;
                    /**
                     * Schedule time
                     * @description Time to schedule thread creation (format: `HH:MM`).
                     */
                    schedule_time?: string;
                    /**
                     * Watch thread state
                     * @description Watch thread state.
                     */
                    watch_thread_state?: boolean;
                    /**
                     * Watch thread
                     * @description Receive forum notifications of new posts in this thread.
                     */
                    watch_thread?: boolean;
                    /**
                     * Watch thread email
                     * @description Receive email notifications of new posts in this thread.
                     */
                    watch_thread_email?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        thread: components["schemas"]["Resp_ThreadModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.CreateContest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * Post Body
                     * @description Content of the new contest.
                     */
                    post_body: string;
                    /**
                     * Thread Title
                     * @description Thread title. Can be skipped if **title_en** set.
                     */
                    title?: string;
                    /**
                     * Thread Title English
                     * @description Thread english title. Can be skipped if **title** set.
                     */
                    title_en?: string;
                    /**
                     * Contest Type
                     * @description Contest type.
                     * @default by_finish_date
                     * @enum {string}
                     */
                    contest_type: "by_finish_date";
                    /**
                     * Length Value
                     * @description Giveaway duration value. The maximum duration is 3 days. Required if **contest_type** is **by_finish_date**.
                     */
                    length_value?: number;
                    /**
                     * Length Option
                     * @description Giveaway duration type. The maximum duration is 3 days. Required if **contest_type** is **by_finish_date**.
                     * @enum {string}
                     */
                    length_option?: "minutes" | "hours" | "days";
                    /**
                     * Prize Type
                     * @description Prize type.
                     * @enum {string}
                     */
                    prize_type: "money" | "upgrades";
                    /**
                     * Count Winners
                     * @description Winner count (prize count). Optional if **prize_type** is **money**.
                     */
                    count_winners?: number;
                    /**
                     * Prize Data Money
                     * @description How much money will each winner receive. Optional if **prize_type** is **money**.
                     */
                    prize_data_money?: number;
                    /**
                     * Count Winners
                     * @description Enable the distribution of money prizes by places. Optional if **prize_type** is **money**.
                     */
                    is_money_places?: boolean;
                    /**
                     * Prize Data Money
                     * @description How much money will receive each place. Required if **is_money_places** is **1**.
                     */
                    prize_data_places?: number[];
                    /**
                     * Prize Data Upgrade
                     * @description Which upgrade will each winner receive. Required if **prize_type** is **upgrades**.
                     * @enum {integer}
                     */
                    prize_data_upgrade?: 1 | 6 | 12 | 14 | 17 | 19 | 20 | 21 | 22;
                    /**
                     * Require Like Count
                     * @description Sympathies for this week.
                     */
                    require_like_count: number;
                    /**
                     * Require Total Like Count
                     * @description Sympathies for all time.
                     */
                    require_total_like_count: number;
                    /**
                     * Secret Answer
                     * @description Secret answer of your account.
                     */
                    secret_answer?: string;
                    /**
                     * Thread Tags
                     * @description Thread tags.
                     */
                    tags?: string[];
                    /**
                     * Reply group
                     * @description Allow to reply only users with chosen or higher group.
                     * @default 2
                     * @enum {integer}
                     */
                    reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
                    /**
                     * Comment ignore group
                     * @description Allow commenting if user can't post in thread.
                     */
                    comment_ignore_group?: boolean;
                    /**
                     * Don't alert followers
                     * @description Don't alert followers about thread creation.
                     */
                    dont_alert_followers?: boolean;
                    /**
                     * Hide contacts
                     * @description Hide contacts.
                     */
                    hide_contacts?: boolean;
                    /**
                     * Allow ask hidden content
                     * @description Allow ask hidden content.
                     */
                    allow_ask_hidden_content?: boolean;
                    /**
                     * Schedule date
                     * @description Date to schedule thread creation (format: `DD-MM-YYYY`).
                     */
                    schedule_date?: string;
                    /**
                     * Schedule time
                     * @description Time to schedule thread creation (format: `HH:MM`).
                     */
                    schedule_time?: string;
                    /**
                     * Watch thread state
                     * @description Watch thread state.
                     */
                    watch_thread_state?: boolean;
                    /**
                     * Watch thread
                     * @description Receive forum notifications of new posts in this thread.
                     */
                    watch_thread?: boolean;
                    /**
                     * Watch thread email
                     * @description Receive email notifications of new posts in this thread.
                     */
                    watch_thread_email?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        thread: components["schemas"]["Resp_ThreadModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.Claim": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description To whom the complaint is filed. Specify a nickname or a link to the profile. */
                    as_responder: string;
                    /** @description Did you buy account on the market? */
                    as_is_market_deal: boolean;
                    /**
                     * @description Market item id.
                     *     Required if **as_is_market_deal** is 1.
                     */
                    as_market_item_id?: number;
                    /**
                     * @description Contacts and wallets of the responder. Specify the known data about the responder, if any.
                     *     Optional if **as_is_market_deal** is 0.
                     */
                    as_data?: string;
                    /** @description Indicate the amount by which the responder deceived you. */
                    as_amount: number;
                    /**
                     * @description Currency of Claim.
                     * @enum {string}
                     */
                    currency?: "rub" | "uah" | "kzt" | "byn" | "usd" | "eur" | "gbp" | "cny" | "try";
                    /**
                     * @description The transaction took place through a guarantor or there was a transfer to the market with a hold?
                     *     Required if **as_is_market_deal** is 0.
                     * @enum {string}
                     */
                    transfer_type: "guarantor" | "safe" | "notsafe";
                    /**
                     * @description Pay claim fee now or later. (Only for **transfer_type** = **notsafe**)
                     * @enum {string}
                     */
                    pay_claim?: "now" | "later";
                    /**
                     * @description Funds transfer receipt.
                     *     Upload a receipt for the transfer of funds, use the "View receipt" button in your wallet. May be uploaded to [Imgur](https://imgur.com/upload). Write "no" if you have not paid.
                     *     Required if **as_is_market_deal** is 0.
                     */
                    as_funds_receipt?: string;
                    /**
                     * @description Screenshot showing the respondent's Telegram login.
                     *     If the correspondence was conducted in Telegram, upload a screenshot that will display the respondent's Telegram login against the background of your dialogue. The screenshot may be uploaded to [Imgur](https://imgur.com/upload). If the correspondence was conducted elsewhere, write "no".
                     */
                    as_tg_login_screenshot?: string;
                    /** @description Thread tags. */
                    tags?: string[];
                    /** @description Hide contacts. */
                    hide_contacts?: boolean;
                    /** @description Allow ask hidden content. */
                    allow_ask_hidden_content?: boolean;
                    /**
                     * @description Allow to reply only users with chosen or higher group.
                     * @default 2
                     * @enum {integer}
                     */
                    reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
                    /** @description Allow commenting if user can't post in thread. */
                    comment_ignore_group?: boolean;
                    /** @description Don't alert followers about thread creation. */
                    dont_alert_followers?: boolean;
                    /** @description Date to schedule thread creation (format: `DD-MM-YYYY`). */
                    schedule_date?: string;
                    /** @description Time to schedule thread creation (format: `HH:MM`). */
                    schedule_time?: string;
                    /** @description Watch thread state. */
                    watch_thread_state?: boolean;
                    /** @description Receive forum notifications of new posts in this thread. */
                    watch_thread?: boolean;
                    /** @description Receive email notifications of new posts in this thread. */
                    watch_thread_email?: boolean;
                    /**
                     * @description You should describe what's happened.
                     *     - describe the situation in a nutshell. If you wish, you can describe the situation in more detail using the "Spoiler" function.
                     *     - attach screenshots of correspondence. You may upload to the site [Imgur](https://imgur.com/upload) - for convenience, use Ctrl + V when uploading screenshots to the album.
                     *     - other evidence;
                     *     - notify the respondent about the complaint you created, familiarize him with hidden content
                     *
                     *     Describe the situation in as much detail as possible.
                     */
                    post_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        thread: components["schemas"]["Resp_ThreadModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.Get": {
        parameters: {
            query?: {
                /** @description List of fields to include. */
                fields_include?: ("*" | "latest_posts")[];
            };
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        thread: components["schemas"]["Resp_ThreadModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Edit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Thread title. */
                    title?: string;
                    /** @description Thread title english. */
                    title_en?: string;
                    /** @description Prefix ids. Set "0" to remove all thread prefixes. */
                    prefix_id?: number[];
                    /** @description Thread tags. */
                    tags?: string[];
                    /** @description Discussion state. */
                    discussion_open?: boolean;
                    /** @description Hide contacts. */
                    hide_contacts?: boolean;
                    /** @description Allow ask hidden content. */
                    allow_ask_hidden_content?: boolean;
                    /**
                     * @description Allow to reply only users with chosen or higher group.
                     * @enum {integer}
                     */
                    reply_group?: 0 | 2 | 21 | 22 | 23 | 60 | 351;
                    /** @description Allow commenting if user can't post in thread. */
                    comment_ignore_group?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        thread: components["schemas"]["Resp_ThreadModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Reason of the thread removal. */
                    reason?: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Move": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Forum id. */
                    node_id: string;
                    /** @description Thread title. */
                    title?: string;
                    /** @description Thread title english. */
                    title_en?: string;
                    /** @description Prefix ids. Set "0" to remove all thread prefixes. */
                    prefix_id?: number[];
                    /** @description Apply thread prefix. */
                    apply_thread_prefix?: boolean;
                    /** @description Send a notification to users who are followed to target node. */
                    send_alert?: boolean;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Bump": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Hide": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Star": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Unstar": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Followers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                            /** Follow */
                            follow: {
                                /** Alert */
                                alert: boolean;
                                /** Email */
                                email: boolean;
                            };
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Whether to receive notification as email. */
                    email?: boolean;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Unfollow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Followed": {
        parameters: {
            query?: {
                /** @description If included in the request, only the thread count is returned as **threads_total**. */
                total?: boolean;
                /** @description List of fields to include. */
                fields_include?: ("*" | "latest_posts")[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Threads */
                        threads: components["schemas"]["Resp_ThreadModel"][];
                        /** Threads */
                        threads_total: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.Navigation": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Elements */
                        elements: {
                            /** Category */
                            category_id: number;
                            /** Category */
                            category_title: string;
                            /** Category */
                            category_description: string;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Sub */
                                "sub-categories": string;
                                /** Sub */
                                "sub-forums": string;
                                /** Sub */
                                "sub-elements": string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                            /** Navigation */
                            navigation_type: string;
                            /** Navigation */
                            navigation_id: number;
                            /** Navigation */
                            navigation_depth: number;
                            /** Navigation */
                            navigation_parent_id: number;
                            /** Has */
                            has_sub_elements: boolean;
                        }[];
                        /** Elements */
                        elements_count: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Poll.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Poll */
                        poll: {
                            /** Poll */
                            poll_id: number;
                            /** Poll */
                            poll_question: string;
                            /** Poll */
                            poll_vote_count: number;
                            /** Poll */
                            poll_max_votes: number;
                            /** Poll */
                            poll_is_open: boolean;
                            /** Poll */
                            poll_is_voted: boolean;
                            /** Responses */
                            responses: {
                                /** Response */
                                response_id: number;
                                /** Response */
                                response_answer: string;
                                /** Response */
                                response_vote_count: number;
                            }[];
                            /** Permissions */
                            permissions: {
                                /** Vote */
                                vote: boolean;
                                /** Result */
                                result: boolean;
                            };
                            /** Links */
                            links: {
                                /** Vote */
                                vote: string;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Poll.Vote": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The id of the response to vote for. Can be skipped if **response_ids** set. */
                    response_id?: number;
                    /** @description An array of ids of responses (if the poll allows multiple choices). */
                    response_ids?: number[];
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Threads.Unread": {
        parameters: {
            query?: {
                /** @description Maximum number of result threads. The limit may get decreased if the value is too large (depending on the system configuration). */
                limit?: number;
                /** @description Id of the container forum to search for threads. Child forums of the specified forum will be included in the search. */
                forum_id?: number;
                /** @description Number of thread data to be returned. Default value is 20. */
                data_limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Threads */
                        threads: {
                            thread_id: number;
                        }[];
                        /** Data */
                        data: components["schemas"]["Resp_ThreadModel"][];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.Recent": {
        parameters: {
            query?: {
                /** @description Maximum number of days to search for threads. */
                days?: number;
                /** @description Maximum number of result threads. The limit may get decreased if the value is too large. */
                limit?: number;
                /** @description Id of the container forum to search for threads. Child forums of the specified forum will be included in the search. */
                forum_id?: number;
                /** @description Number of thread data to be returned. Default value is 20. */
                data_limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Threads */
                        threads: {
                            thread_id: number;
                        }[];
                        /** Data */
                        data: components["schemas"]["Resp_ThreadModel"][];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Threads.Finish": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of thread. */
                thread_id: components["parameters"]["thread_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.List": {
        parameters: {
            query?: {
                /** @description Id of the containing thread. */
                thread_id?: number;
                /** @description Id of a post, posts that are in the same page with the specified post will be returned. **thread_id** may be skipped. */
                page_of_post_id?: number;
                /** @description Page number of posts. */
                page?: number;
                /** @description Number of posts in a page. */
                limit?: number;
                /** @description Ordering of posts. */
                order?: "natural" | "natural_reverse" | "post_likes" | "post_likes_reverse";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Posts */
                        posts: components["schemas"]["Resp_ThreadModel"][];
                        thread: components["schemas"]["Resp_ThreadModel"];
                        /** Posts */
                        posts_total: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Posts.Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Content of the new post. */
                    post_body: string;
                    /** @description Id of the target thread. **quote_post_id** can be skipped if this parameter is provided. */
                    thread_id?: number;
                    /** @description Id of the quote post. **thread_id** can be skipped if this parameter is provided. */
                    quote_post_id?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        post: components["schemas"]["Resp_PostModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Posts.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        post: components["schemas"]["Resp_PostModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Edit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Content of the post. */
                    post_body?: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        post: components["schemas"]["Resp_PostModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Reason of the post removal. */
                    reason?: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Likes": {
        parameters: {
            query?: {
                /** @description Page number of users. */
                page?: number;
                /** @description Number of users in a page. */
                limit?: number;
            };
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Like": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Unlike": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.ReportReasons": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Reasons */
                        reasons: string[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Report": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of post. */
                post_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Reason of the report. */
                    message: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Comments.Get": {
        parameters: {
            query: {
                /** @description Id of post. */
                post_id: number;
                /** @description The time in milliseconds (e.g. 1652177794083) before last comment date. */
                before?: number;
                /** @description Comment id to get older comments. */
                before_comment?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        comments: components["schemas"]["Resp_PostCommentModel"][];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Comments.Edit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of post. */
                    post_comment_id: number;
                    /** @description Content of the new post comment. */
                    comment_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Comment */
                        comment: {
                            /** Post */
                            post_comment_id: number;
                            /** Post */
                            post_id: number;
                            /** Thread */
                            thread_id: number;
                            /** Poster */
                            poster_user_id: number;
                            /** Poster */
                            poster_username: string;
                            /** Poster */
                            poster_username_html: string;
                            /** Post */
                            post_comment_body: string;
                            /** Post */
                            post_comment_body_html: string;
                            /** Post */
                            post_comment_body_plain_text: string;
                            /** Post */
                            post_comment_like_count: number;
                            /** User */
                            user_is_ignored: boolean;
                            /** Post */
                            post_comment_is_published: boolean;
                            /** Post */
                            post_comment_is_deleted: boolean;
                            /** Post */
                            post_comment_update_date: number;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Post */
                                post: string;
                                /** Thread */
                                thread: string;
                                /** Poster */
                                poster: string;
                                /** Likes */
                                likes: string;
                                /** Report */
                                report: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Reply */
                                reply: boolean;
                                /** Like */
                                like: boolean;
                                /** Report */
                                report: boolean;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Comments.Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of post. */
                    post_id: number;
                    /** @description Content of the a post comment. */
                    comment_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Comment */
                        comment: {
                            /** Post */
                            post_comment_id: number;
                            /** Post */
                            post_id: number;
                            /** Thread */
                            thread_id: number;
                            /** Poster */
                            poster_user_id: number;
                            /** Poster */
                            poster_username: string;
                            /** Poster */
                            poster_username_html: string;
                            /** Post */
                            post_comment_body: string;
                            /** Post */
                            post_comment_body_html: string;
                            /** Post */
                            post_comment_body_plain_text: string;
                            /** Post */
                            post_comment_like_count: number;
                            /** User */
                            user_is_ignored: boolean;
                            /** Post */
                            post_comment_is_published: boolean;
                            /** Post */
                            post_comment_is_deleted: boolean;
                            /** Post */
                            post_comment_update_date: number;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Post */
                                post: string;
                                /** Thread */
                                thread: string;
                                /** Poster */
                                poster: string;
                                /** Likes */
                                likes: string;
                                /** Report */
                                report: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Reply */
                                reply: boolean;
                                /** Like */
                                like: boolean;
                                /** Report */
                                report: boolean;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Comments.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of post comment. */
                    post_comment_id: number;
                    /** @description Reason of a post comment removal. */
                    reason?: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Posts.Comments.Report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of post comment. */
                    post_comment_id: number;
                    /** @description Reason of the report. */
                    message: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.List": {
        parameters: {
            query?: {
                /** @description Page number of users. */
                page?: number;
                /** @description Number of users in a page. */
                limit?: number;
                /** @description List of fields to include. */
                fields_include?: ("*" | "alerts")[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: components["schemas"]["Resp_UserModel"][];
                        /** Users */
                        users_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Users.Fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Fields */
                        fields: {
                            /** Id */
                            id: string;
                            /** Title */
                            title: string;
                            /** Description */
                            description: string;
                            /** Position */
                            position: string;
                            /** Is */
                            is_required: boolean;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Users.Find": {
        parameters: {
            query?: {
                /** @description Username to filter. Usernames start with the query will be returned. */
                username?: string;
                /** @description Custom fields to filter. Example: **custom_fields[telegram]=telegramLogin**. */
                custom_fields?: {
                    [key: string]: string;
                };
                /** @description List of fields to include. */
                fields_include?: ("*" | "alerts")[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: components["schemas"]["Resp_UserModel"][];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Users.Get": {
        parameters: {
            query?: {
                /** @description List of fields to include. */
                fields_include?: ("*" | "alerts")[];
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user: components["schemas"]["Resp_UserModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Edit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description New username. */
                    username?: string;
                    /** @description New custom title of the user. */
                    user_title?: string;
                    /** @description Id of the group you want to display. */
                    display_group_id?: number;
                    /** @description Id of the icon group you want to display. */
                    display_icon_group_id?: number;
                    /** @description Id of the banner you want to display. */
                    display_banner_id?: number;
                    /** @description This message is shown when someone wants to write to you. */
                    conv_welcome_message?: string;
                    /** @description Your date of birth (day). */
                    user_dob_day?: number;
                    /** @description Your date of birth (month). */
                    user_dob_month?: number;
                    /** @description Your date of birth (year). */
                    user_dob_year?: number;
                    /** @description Secret answer. */
                    secret_answer?: string;
                    /** @description Secret answer type. */
                    secret_answer_type?: number;
                    /** @description Profile short link. */
                    short_link?: string;
                    /**
                     * @description User interface language ID.
                     * @enum {integer}
                     */
                    language_id?: 1 | 2;
                    /**
                     * @description User gender.
                     * @enum {string}
                     */
                    gender?: "" | "male" | "female";
                    /**
                     * @description User timezone.
                     * @enum {string}
                     */
                    timezone?: "Pacific/Midway" | "Pacific/Honolulu" | "Pacific/Marquesas" | "America/Anchorage" | "America/Los_Angeles" | "America/Santa_Isabel" | "America/Tijuana" | "America/Denver" | "America/Chihuahua" | "America/Phoenix" | "America/Chicago" | "America/Belize" | "America/Mexico_City" | "Pacific/Easter" | "America/New_York" | "America/Havana" | "America/Bogota" | "America/Caracas" | "America/Halifax" | "America/Goose_Bay" | "America/Asuncion" | "America/Santiago" | "America/Cuiaba" | "America/La_Paz" | "America/St_Johns" | "America/Argentina/Buenos_Aires" | "America/Argentina/San_Luis" | "America/Argentina/Mendoza" | "Atlantic/Stanley" | "America/Godthab" | "America/Montevideo" | "America/Sao_Paulo" | "America/Miquelon" | "America/Noronha" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "Europe/London" | "Africa/Casablanca" | "Atlantic/Reykjavik" | "Europe/Amsterdam" | "Africa/Algiers" | "Africa/Windhoek" | "Africa/Tunis" | "Europe/Athens" | "Africa/Johannesburg" | "Europe/Kaliningrad" | "Asia/Amman" | "Asia/Beirut" | "Africa/Cairo" | "Asia/Jerusalem" | "Asia/Gaza" | "Asia/Damascus" | "Europe/Moscow" | "Europe/Minsk" | "Africa/Nairobi" | "Asia/Tehran" | "Asia/Dubai" | "Asia/Yerevan" | "Asia/Baku" | "Indian/Mauritius" | "Asia/Kabul" | "Asia/Yekaterinburg" | "Asia/Tashkent" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Novosibirsk" | "Asia/Dhaka" | "Asia/Almaty" | "Asia/Rangoon" | "Asia/Krasnoyarsk" | "Asia/Bangkok" | "Asia/Irkutsk" | "Asia/Hong_Kong" | "Asia/Singapore" | "Australia/Perth" | "Asia/Yakutsk" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Adelaide" | "Australia/Darwin" | "Asia/Vladivostok" | "Asia/Magadan" | "Australia/Brisbane" | "Australia/Sydney" | "Pacific/Noumea" | "Pacific/Norfolk" | "Asia/Anadyr" | "Pacific/Auckland" | "Pacific/Fiji" | "Pacific/Chatham" | "Pacific/Tongatapu" | "Pacific/Apia" | "Pacific/Kiritimati";
                    /** @description Whether to receive admin emails. */
                    receive_admin_email?: boolean;
                    /** @description Whether user activity is visible. */
                    activity_visible?: boolean;
                    /** @description Show date of birth (day and month). */
                    show_dob_date?: boolean;
                    /** @description Show year of birth. */
                    show_dob_year?: boolean;
                    /** @description Hide username change logs. */
                    hide_username_change_logs?: boolean;
                    /**
                     * @description Who can view your profile.
                     * @enum {string}
                     */
                    allow_view_profile?: "none" | "members" | "followed";
                    /**
                     * @description Who can post on your profile.
                     * @enum {string}
                     */
                    allow_post_profile?: "none" | "members" | "followed";
                    /**
                     * @description Who can send you personal conversations.
                     * @enum {string}
                     */
                    allow_send_personal_conversation?: "none" | "members" | "followed";
                    /**
                     * @description Who can invite you to groups.
                     * @enum {string}
                     */
                    allow_invite_group?: "none" | "members" | "followed";
                    /**
                     * @description Who can see your news feed.
                     * @enum {string}
                     */
                    allow_receive_news_feed?: "none" | "members" | "followed";
                    /** @description Alert settings. */
                    alert?: {
                        [key: string]: boolean;
                    };
                    /** @description Custom user profile fields. */
                    fields?: {
                        /** @description Your location. */
                        location?: string;
                        /** @description Your occupation. */
                        occupation?: string;
                        /** @description Your homepage. */
                        homepage?: string;
                        /** @description Your interests. */
                        _4?: string;
                        /** @description Thread link for "innovator" trophy. */
                        lztInnovationLink?: string;
                        /** @description Thread link for "innovator 2.0" trophy. */
                        lztInnovation20Link?: string;
                        /** @description Thread link for "innovator 3.0" trophy. */
                        lztInnovation30Link?: string;
                        /** @description Insert your Telegram username. */
                        telegram?: string;
                        /** @description Insert your VK profile link. */
                        vk?: string;
                        /** @description Insert your Discord username. */
                        discord?: string;
                        /** @description Insert your Steam profile link. */
                        steam?: string;
                        /** @description Your jabber. */
                        jabber?: string;
                        /** @description Instert your Github profile link. */
                        github?: string;
                        /** @description Insert your Matrix username and server here (for example, @admin:lolz.live). */
                        matrix?: string;
                    };
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Claims": {
        parameters: {
            query?: {
                /** @description Filter claims by their type. */
                type?: "market" | "nomarket";
                /** @description Filter claims by their state. */
                claim_state?: "active" | "solved" | "rejected" | "settled";
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Claims */
                        claims: {
                            /** Thread */
                            thread_id: number;
                            /** Claim */
                            claim_date: number;
                            /** Claim */
                            claim_state: string;
                            /** Message */
                            message_body: string;
                            /** Message */
                            message_body_html: string;
                            /** Message */
                            message_body_plain_text: string;
                            /** Amount */
                            amount: number;
                            /** Amount */
                            amount_formatted: string;
                            author: components["schemas"]["Resp_UserModel"];
                        }[];
                        /** Stats */
                        stats: {
                            /** Market */
                            market: {
                                /** Total */
                                total: number;
                                /** Solved */
                                solved: number;
                                /** Settled */
                                settled: number;
                                /** Rejected */
                                rejected: number;
                            };
                            /** No Market */
                            noMarket: {
                                /** Total */
                                total: number;
                                /** Solved */
                                solved: number;
                                /** Settled */
                                settled: number;
                                /** Rejected */
                                rejected: number;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Avatar.Upload": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description Binary data of the avatar.
                     */
                    avatar: string;
                    /** @description The starting point of the selection by width. Default value - 0 */
                    x?: number;
                    /** @description The starting point of the selection by height. Default value - 0 */
                    y?: number;
                    /** @description Selection size. */
                    crop?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Avatar.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Avatar.Crop": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The starting point of the selection by width. Default value - 0 */
                    x?: number;
                    /** @description The starting point of the selection by height. Default value - 0 */
                    y?: number;
                    /** @description Selection size. */
                    crop?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Background.Upload": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description Binary data of the background. Background image must be 1920x1080 pixels
                     */
                    background: string;
                    /** @description The starting point of the selection by width. Default value - 0 */
                    x?: number;
                    /** @description The starting point of the selection by height. Default value - 0 */
                    y?: number;
                    /** @description Selection size. */
                    crop?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Background.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Background.Crop": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description The starting point of the selection by width. Default value - 0 */
                    x?: number;
                    /** @description The starting point of the selection by height. Default value - 0 */
                    y?: number;
                    /** @description Selection size. */
                    crop?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Followers": {
        parameters: {
            query?: {
                /** @description Ordering of followers. */
                order?: "natural" | "follow_date" | "follow_date_reverse";
                /** @description Page number of followers. */
                page?: number;
                /** @description Number of followers in a page. */
                limit?: number;
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** Content */
                            content_type: string;
                            /** Content */
                            content_id: number;
                            /** Follow */
                            follow_date: number;
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                            /** Username */
                            username_html: string;
                            /** User */
                            user_message_count: number;
                            /** User */
                            user_register_date: number;
                            /** User */
                            user_like_count: number;
                            /** User */
                            user_like2_count: number;
                            /** Contest */
                            contest_count: number;
                            /** Trophy */
                            trophy_count: number;
                            /** Custom */
                            custom_title: string;
                            /** Is */
                            is_banned: number;
                            /** User */
                            user_title: string;
                            /** User */
                            user_is_valid: boolean;
                            /** User */
                            user_is_verified: boolean;
                            /** User */
                            user_is_followed: boolean;
                            /** User */
                            user_last_seen_date: number;
                            /** User */
                            user_following_count: number;
                            /** User */
                            user_followers_count: number;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Avatar */
                                avatar: string;
                                /** Avatar */
                                avatar_big: string;
                                /** Avatar */
                                avatar_small: string;
                                /** Followers */
                                followers: string;
                                /** Followings */
                                followings: string;
                                /** Ignore */
                                ignore: string;
                                /** Timeline */
                                timeline: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** Edit */
                                edit: boolean;
                                /** Follow */
                                follow: boolean;
                                /** Ignore */
                                ignore: boolean;
                                /** Profile */
                                profile_post: boolean;
                            };
                            /** User */
                            user_is_ignored: boolean;
                            /** User */
                            user_is_visitor: boolean;
                            /** User */
                            user_group_id: number;
                            /** Custom */
                            custom_fields: {
                                _4: string;
                                /** Lzt innovation link */
                                lztInnovation20Link: string;
                                /** Lzt innovation link */
                                lztInnovation30Link: string;
                                /** Lzt innovation link */
                                lztInnovationLink: string;
                            };
                        }[];
                        /** Users */
                        users_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Unfollow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Followings": {
        parameters: {
            query?: {
                /** @description Ordering of users. */
                order?: "natural" | "follow_date" | "follow_date_reverse";
                /** @description Page number of users. */
                page?: number;
                /** @description Number of users in a page. */
                limit?: number;
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** Content */
                            content_type: string;
                            /** Content */
                            content_id: number;
                            /** Follow */
                            follow_date: number;
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                            /** Username */
                            username_html: string;
                            /** User */
                            user_message_count: number;
                            /** User */
                            user_register_date: number;
                            /** User */
                            user_like_count: number;
                            /** User */
                            user_like2_count: number;
                            /** Contest */
                            contest_count: number;
                            /** Trophy */
                            trophy_count: number;
                            /** Short */
                            short_link: string;
                            /** Custom */
                            custom_title: string;
                            /** Is */
                            is_banned: number;
                            /** User */
                            user_title: string;
                            /** User */
                            user_is_valid: boolean;
                            /** User */
                            user_is_verified: boolean;
                            /** User */
                            user_is_followed: boolean;
                            /** User */
                            user_last_seen_date: number;
                            /** User */
                            user_following_count: number;
                            /** User */
                            user_followers_count: number;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Avatar */
                                avatar: string;
                                /** Avatar */
                                avatar_big: string;
                                /** Avatar */
                                avatar_small: string;
                                /** Followers */
                                followers: string;
                                /** Followings */
                                followings: string;
                                /** Ignore */
                                ignore: string;
                                /** Timeline */
                                timeline: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** Edit */
                                edit: boolean;
                                /** Follow */
                                follow: boolean;
                                /** Ignore */
                                ignore: boolean;
                                /** Profile */
                                profile_post: boolean;
                            };
                            /** User */
                            user_is_ignored: boolean;
                            /** User */
                            user_is_visitor: boolean;
                            /** User */
                            user_group_id: number;
                            /** Custom */
                            custom_fields: {
                                _4: string;
                                /** Allow self unban */
                                allowSelfUnban: unknown[];
                                /** Discord */
                                discord: string;
                                /** Github */
                                github: string;
                                /** Jabber */
                                jabber: string;
                                /** Lzt award user trophy */
                                lztAwardUserTrophy: string;
                                /** Lzt curator node title */
                                lztCuratorNodeTitle: string;
                                /** Lzt curator node title en */
                                lztCuratorNodeTitleEn: string;
                                /** Lzt deposit */
                                lztDeposit: string;
                                /** Lzt innovation link */
                                lztInnovation20Link: string;
                                /** Lzt innovation link */
                                lztInnovation30Link: string;
                                /** Lzt innovation link */
                                lztInnovationLink: string;
                                /** Lzt likes increasing */
                                lztLikesIncreasing: string;
                                /** Lzt likes zeroing */
                                lztLikesZeroing: string;
                                /** Lzt sympathy increasing */
                                lztSympathyIncreasing: string;
                                /** Lzt sympathy zeroing */
                                lztSympathyZeroing: string;
                                /** Maecenas value */
                                maecenasValue: string;
                                /** Scam url */
                                scamURL: string;
                                /** Steam */
                                steam: string;
                                /** Telegram */
                                telegram: string;
                                /** Vk */
                                vk: string;
                            };
                        }[];
                        /** Users */
                        users_total: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Likes": {
        parameters: {
            query?: {
                /** @description Filter by forum section. */
                node_id?: number;
                /** @description Like type. */
                like_type?: "like" | "like2";
                /** @description Likes type. */
                type?: "gotten" | "given";
                /** @description Page number. */
                page?: number;
                /** @description Content type. */
                content_type?: "post" | "post_comment" | "profile_post" | "profile_post_comment";
                /** @description Get only likes from specified user. */
                search_user_id?: number;
                /** @description Show weekly statistics. */
                stats?: boolean;
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Page */
                        page: number;
                        /** Per Page */
                        perPage: number;
                        /** Content Type */
                        contentType: string;
                        /** Total Likes */
                        totalLikes: number;
                        /** Likes */
                        likes: {
                            1234567890: {
                                /** Like */
                                like_id: number;
                                /** Content */
                                content_type: string;
                                /** Content */
                                content_id: number;
                                /** Like */
                                like_user_id: number;
                                /** Like */
                                like_date: number;
                                /** Content */
                                content_user_id: number;
                                /** Content */
                                content_state: string;
                                user: components["schemas"]["Resp_UserModel"];
                                actionUser: components["schemas"]["Resp_UserModel"];
                                /** Message Html */
                                messageHtml: string;
                                /** Post */
                                post_date: number;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Ignored": {
        parameters: {
            query?: {
                /** @description If included in the request, only the user count is returned as **users_total**. */
                total?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** Can */
                            can_edit: boolean;
                            /** Can */
                            can_follow: boolean;
                            /** Can */
                            can_ignore: boolean;
                            /** Can */
                            can_post_profile: boolean;
                            /** Can */
                            can_view_profile: boolean;
                            /** Can */
                            can_view_profile_posts: boolean;
                            /** Can */
                            can_warn: boolean;
                            /** Contest */
                            contest_count: number;
                            /** Conv */
                            conv_welcome_message: string;
                            /** Converted Deposit */
                            convertedDeposit: number;
                            /** Custom */
                            custom_fields: {
                                _4: string;
                                /** Scam Url */
                                scamURL: unknown;
                                /** Lzt Likes Zeroing */
                                lztLikesZeroing: unknown;
                                /** Lzt Likes Increasing */
                                lztLikesIncreasing: unknown;
                                /** Lzt Sympathy Zeroing */
                                lztSympathyZeroing: unknown;
                                /** Lzt Sympathy Increasing */
                                lztSympathyIncreasing: unknown;
                                /** Telegram */
                                telegram: unknown;
                                /** Vk */
                                vk: string;
                                /** Discord */
                                discord: string;
                                /** Steam */
                                steam: string;
                                /** Matrix */
                                matrix: unknown;
                                /** Jabber */
                                jabber: string;
                                /** Github */
                                github: string;
                            };
                            /** Deposit */
                            deposit: number;
                            /** Homepage */
                            homepage: string;
                            /** Ignored */
                            ignored_info: {
                                /** Ignore */
                                ignore_content: number;
                                /** Ignore */
                                ignore_conversations: number;
                                /** Restrict */
                                restrict_view_profile: number;
                            };
                            /** Is */
                            is_admin: boolean;
                            /** Is */
                            is_banned: boolean;
                            /** Is */
                            is_followed: boolean;
                            /** Is */
                            is_ignored: boolean;
                            /** Is */
                            is_moderator: boolean;
                            /** Is */
                            is_staff: boolean;
                            /** Last */
                            last_activity: number;
                            /** Like */
                            like2_count: number;
                            /** Like */
                            like_count: number;
                            /** Location */
                            location: string;
                            /** Message */
                            message_count: number;
                            /** Register */
                            register_date: number;
                            /** Rendered */
                            rendered: {
                                /** Username */
                                username: string;
                                /** Avatars */
                                avatars: {
                                    /** L */
                                    l: string;
                                    /** M */
                                    m: string;
                                    /** S */
                                    s: string;
                                };
                                /** Backgrounds */
                                backgrounds: unknown[];
                                /** Link */
                                link: string;
                            };
                            /** Short */
                            short_link: string;
                            /** Trophy */
                            trophy_points: number;
                            /** User */
                            user_id: number;
                            /** User */
                            user_title: string;
                            /** Username */
                            username: string;
                            /** View */
                            view_url: string;
                            /** Warning */
                            warning_points: number;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Users.IgnoreEdit": {
        parameters: {
            query?: {
                /** @description Ignore user's conversations. */
                ignore_conversations?: boolean;
                /** @description Ignore user's content. */
                ignore_content?: boolean;
                /** @description Restrict user from viewing your profile. */
                restrict_view_profile?: boolean;
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Ignore": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Unignore": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Contents": {
        parameters: {
            query?: {
                /** @description Page number of contents. */
                page?: number;
                /** @description Number of contents in a page. */
                limit?: number;
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: {
                            /** Content */
                            content_type: string;
                            /** Content */
                            content_id: number;
                            /** Post */
                            post_id: number;
                            /** Thread */
                            thread_id: number;
                            /** Poster */
                            poster_user_id: number;
                            /** Poster */
                            poster_username: string;
                            /** Poster */
                            poster_username_html: string;
                            /** Post */
                            post_create_date: number;
                            /** Post */
                            post_body: string;
                            /** Post */
                            post_body_html: string;
                            /** Post */
                            post_body_plain_text: string;
                            /** Signature */
                            signature: string;
                            /** Signature */
                            signature_html: string;
                            /** Signature */
                            signature_plain_text: string;
                            /** Post */
                            post_like_count: number;
                            /** Post */
                            post_attachment_count: number;
                            /** Like */
                            like_users: {
                                /** User */
                                user_id: number;
                                /** Username */
                                username: string;
                                /** Display */
                                display_style_group_id: number;
                                /** Is */
                                is_banned: number;
                                /** Uniq */
                                uniq_username_css: string;
                            }[];
                            /** User */
                            user_is_ignored: boolean;
                            /** Post */
                            post_is_published: boolean;
                            /** Post */
                            post_is_deleted: boolean;
                            /** Post */
                            post_update_date: number;
                            /** Post */
                            post_is_first_post: boolean;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Thread */
                                thread: string;
                                /** Poster */
                                poster: string;
                                /** Likes */
                                likes: string;
                                /** Report */
                                report: string;
                                /** Attachments */
                                attachments: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Reply */
                                reply: boolean;
                                /** Like */
                                like: boolean;
                                /** Report */
                                report: boolean;
                                /** Upload */
                                upload_attachment: boolean;
                            };
                            thread: components["schemas"]["Resp_ThreadModel"];
                        }[];
                        /** Data */
                        data_total: number;
                        user: components["schemas"]["Resp_UserModel"];
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.Trophies": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Trophies */
                        trophies: {
                            /** Trophy */
                            trophy_id: number;
                            /** Title */
                            title: string;
                            /** Description */
                            description: string;
                            /** Trophy */
                            trophy_url: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Users.SecretAnswerTypes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: {
                            /** Sa */
                            sa_id: number;
                            /** Rendered Phrase */
                            renderedPhrase: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    "Users.SA.Reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Success */
                        success: boolean;
                        /** Waiting */
                        waiting_time: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Users.SA.CancelReset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
        };
    };
    "ProfilePosts.List": {
        parameters: {
            query?: {
                /** @description Filter to get only posts from the specified user. */
                posts_user_id?: number;
                /** @description Page number of contents. */
                page?: number;
                /** @description Number of contents in a page. */
                limit?: number;
                /** @description List of fields to include. */
                fields_include?: ("*" | "latest_comments")[];
            };
            header?: never;
            path: {
                /**
                 * @description User ID.
                 *     > You can use shortlink `me` to interact with your profile.
                 */
                user_id: components["parameters"]["user_id_path"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Profile */
                        profile_posts: components["schemas"]["Resp_ProfilePostModel"][];
                        /** Total profile posts */
                        totalProfilePosts: number;
                        /** Can post on profile */
                        canPostOnProfile: boolean;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        profile_post: components["schemas"]["Resp_ProfilePostModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Edit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Post Body
                     * @description New content of the profile post.
                     */
                    post_body?: string;
                    /**
                     * Disable Comments
                     * @description Disable comments.
                     */
                    disable_comments?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Profile */
                        profile_post: {
                            /** Profile */
                            profile_post_id: number;
                            /** Timeline */
                            timeline_user_id: number;
                            /** Poster */
                            poster_user_id: number;
                            /** Poster */
                            poster_username: string;
                            /** Poster */
                            poster_username_html: string;
                            /** Post */
                            post_create_date: number;
                            /** Post */
                            post_body: string;
                            /** Post */
                            post_like_count: number;
                            /** Post */
                            post_comment_count: number;
                            /** Timeline */
                            timeline_username: string;
                            /** User */
                            user_is_ignored: boolean;
                            /** Post */
                            post_is_published: boolean;
                            /** Post */
                            post_is_deleted: boolean;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Timeline */
                                timeline: string;
                                /** Timeline */
                                timeline_user: string;
                                /** Poster */
                                poster: string;
                                /** Likes */
                                likes: string;
                                /** Comments */
                                comments: string;
                                /** Report */
                                report: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Like */
                                like: boolean;
                                /** Comment */
                                comment: boolean;
                                /** Report */
                                report: boolean;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Delete": {
        parameters: {
            query?: {
                /** @description Reason of the profile post removal. */
                reason?: string;
            };
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.ReportReasons": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Reasons */
                        reasons: string[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Report": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Reason of the report. */
                    message: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    user_id: components["schemas"]["UserIDModel"];
                    /** @description Content of a profile post. */
                    post_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Profile */
                        profile_post: {
                            /** Profile */
                            profile_post_id: number;
                            /** Timeline */
                            timeline_user_id: number;
                            /** Poster */
                            poster_user_id: number;
                            /** Poster */
                            poster_username: string;
                            /** Poster */
                            poster_username_html: string;
                            /** Post */
                            post_create_date: number;
                            /** Post */
                            post_body: string;
                            /** Post */
                            post_like_count: number;
                            /** Post */
                            post_comment_count: number;
                            /** Timeline */
                            timeline_username: string;
                            /** User */
                            user_is_ignored: boolean;
                            /** Post */
                            post_is_published: boolean;
                            /** Post */
                            post_is_deleted: boolean;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Timeline */
                                timeline: string;
                                /** Timeline */
                                timeline_user: string;
                                /** Poster */
                                poster: string;
                                /** Likes */
                                likes: string;
                                /** Comments */
                                comments: string;
                                /** Report */
                                report: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Like */
                                like: boolean;
                                /** Comment */
                                comment: boolean;
                                /** Report */
                                report: boolean;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Stick": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Unstick": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Likes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Like": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Unlike": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Comments.List": {
        parameters: {
            query: {
                /** @description Id of profile post. */
                profile_post_id: number;
                /** @description Date to get older comments. Please note that this entry point does not support the page parameter but it still does support **limit**. */
                before?: number;
                /** @description Number of profile posts in a page. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Comments */
                        comments: components["schemas"]["Resp_ProfilePostCommentModel"][];
                        /** Comments */
                        comments_total: number;
                        /** Profile */
                        profile_post: {
                            /** Profile */
                            profile_post_id: number;
                            /** Timeline */
                            timeline_user_id: number;
                            /** Poster */
                            poster_user_id: number;
                            /** Poster */
                            poster_username: string;
                            /** Poster */
                            poster_username_html: string;
                            /** Post */
                            post_create_date: number;
                            /** Post */
                            post_body: string;
                            /** Post */
                            post_like_count: number;
                            /** Post */
                            post_comment_count: number;
                            /** Timeline */
                            timeline_username: string;
                            /** User */
                            user_is_ignored: boolean;
                            /** Post */
                            post_is_published: boolean;
                            /** Post */
                            post_is_deleted: boolean;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Timeline */
                                timeline: string;
                                /** Timeline */
                                timeline_user: string;
                                /** Poster */
                                poster: string;
                                /** Likes */
                                likes: string;
                                /** Comments */
                                comments: string;
                                /** Report */
                                report: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Like */
                                like: boolean;
                                /** Comment */
                                comment: boolean;
                                /** Report */
                                report: boolean;
                            };
                        };
                        timeline_user: components["schemas"]["Resp_UserModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Comments.Edit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of profile post comment. */
                    comment_id: number;
                    /** @description New content for the profile post comment. */
                    comment_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Comment */
                        comment: {
                            /** Comment */
                            comment_id: number;
                            /** Profile */
                            profile_post_id: number;
                            /** Comment */
                            comment_user_id: number;
                            /** Comment */
                            comment_username: string;
                            /** Comment */
                            comment_username_html: string;
                            /** Comment */
                            comment_create_date: number;
                            /** Comment */
                            comment_body: string;
                            /** User */
                            user_is_ignored: boolean;
                            /** Timeline */
                            timeline_user_id: number;
                            /** Links */
                            links: {
                                /** Detail */
                                detail: string;
                                /** Profile */
                                profile_post: string;
                                /** Timeline */
                                timeline: string;
                                /** Timeline */
                                timeline_user: string;
                                /** Poster */
                                poster: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Comments.Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of profile post. */
                    profile_post_id: number;
                    /** @description Content of the new profile post comment. */
                    comment_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Comment */
                        comment: {
                            /** Comment */
                            comment_id: number;
                            /** Profile */
                            profile_post_id: number;
                            /** Comment */
                            comment_user_id: number;
                            /** Comment */
                            comment_username: string;
                            /** Comment */
                            comment_username_html: string;
                            /** Comment */
                            comment_create_date: number;
                            /** Comment */
                            comment_body: string;
                            /** User */
                            user_is_ignored: boolean;
                            /** Timeline */
                            timeline_user_id: number;
                            /** Links */
                            links: {
                                /** Detail */
                                detail: string;
                                /** Profile */
                                profile_post: string;
                                /** Timeline */
                                timeline: string;
                                /** Timeline */
                                timeline_user: string;
                                /** Poster */
                                poster: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Delete */
                                delete: boolean;
                            };
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Comments.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of profile post comment. */
                    comment_id: number;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Comments.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post. */
                profile_post_id: number;
                /** @description Id of profile post comment. */
                comment_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        comment: components["schemas"]["Resp_ProfilePostCommentModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "ProfilePosts.Comments.Report": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of profile post comment. */
                comment_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Reason of the report. */
                    message: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.List": {
        parameters: {
            query?: {
                /** @description Filter conversations by folder. */
                folder?: "all" | "unread" | "groups" | "market" | "market_replacements" | "staff" | "giveaways" | "p2p";
                /** @description Page number of conversations. */
                page?: number;
                /** @description Number of conversations in a page. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Conversations */
                        conversations: components["schemas"]["Resp_ConversationModel"][];
                        /** Can */
                        can_start: boolean;
                        /** Folders */
                        folders: {
                            /** Id */
                            id: string;
                            /** Title */
                            title: string;
                            /** Name */
                            name: string;
                        }[];
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Conversations.Update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of conversation. */
                    conversation_id: number;
                    /** @description New conversation title. */
                    title?: string;
                    /** @description Allow members to invite others. */
                    open_invite?: boolean;
                    /** @description Make conversation history visible to new members. */
                    history_open?: boolean;
                    /** @description Allow members to edit their own messages. */
                    allow_edit_messages?: boolean;
                    /** @description Allow members to stick messages. */
                    allow_sticky_messages?: boolean;
                    /** @description Allow members to delete their own messages. */
                    allow_delete_own_messages?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        conversation: components["schemas"]["Resp_ConversationModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of recipient. Required if **is_group=false**. */
                    recipient_id?: number;
                    /** @description List of recipients username's. Max recipients count is 10. Required if **is_group=true**. */
                    recipients?: string[];
                    /**
                     * @description Is group. Set **false** if personal conversation, or set **true** if group.
                     * @default false
                     */
                    is_group?: boolean;
                    /** @description The title of new conversation. Required if **is_group=1**. */
                    title?: string;
                    /** @description Open invite. */
                    open_invite?: boolean;
                    /** @description Allow edit messages. */
                    allow_edit_messages?: boolean;
                    /** @description Allow members to stick messages. */
                    allow_sticky_messages?: boolean;
                    /** @description Allow members to delete their own messages. */
                    allow_delete_own_messages?: boolean;
                    /** @description First message. Required if **is_group**=false */
                    message_body?: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        conversation: components["schemas"]["Resp_ConversationModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of conversation. */
                    conversation_id: number;
                    /**
                     * @description Deletion type.
                     * @enum {string}
                     */
                    delete_type: "delete" | "delete_ignore";
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    user_id: components["schemas"]["UserIDModel"];
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        conversation: components["schemas"]["Resp_ConversationModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Save": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Content url. */
                    link: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
        };
    };
    "Conversations.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        conversation: components["schemas"]["Resp_ConversationModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Messages.List": {
        parameters: {
            query?: {
                /** @description Page number of messages. */
                page?: number;
                /** @description Number of messages in a page. */
                limit?: number;
                /** @description Ordering of messages. */
                order?: "natural" | "natural_reverse";
                /** @description Date to get older messages. */
                before?: number;
                /** @description Date to get newer messages. */
                after?: number;
            };
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Messages */
                        messages: components["schemas"]["Resp_ConversationMessageModel"][];
                        /** Messages */
                        messages_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Messages.Create": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description ID of the message being replied to. */
                    reply_message_id?: number;
                    /** @description Content of the new message. */
                    message_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["Resp_ConversationMessageModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Search query string. */
                    q?: string;
                    /** @description Id of conversation. */
                    conversation_id?: number;
                    /** @description Search for recipients. */
                    search_recipients?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Conversations */
                        conversations: components["schemas"]["Resp_ConversationModel"][];
                        /** Recipients */
                        recipients: boolean;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Conversations.Messages.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of message. */
                message_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["Resp_ConversationModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Messages.Edit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
                /** @description Id of message. */
                message_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Message Body
                     * @description New content of the message.
                     */
                    message_body: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["Resp_ConversationModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Messages.Delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
                /** @description Id of message. */
                message_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Invite": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description List of recipients username's. */
                    recipients: string[];
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Kick": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Id of user to kick from conversation. */
                    user_id: number;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Read": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.ReadAll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Messages.Stick": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
                /** @description Id of message. */
                message_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Messages.Unstick": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
                /** @description Id of message. */
                message_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Star": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Unstar": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Alerts.Enable": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Conversations.Alerts.Disable": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of conversation. */
                conversation_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Status */
                        status: string;
                        /** Message */
                        message: string;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Notifications.List": {
        parameters: {
            query?: {
                /** @description Filter notifications by their type. */
                type?: "market" | "nomarket";
                /** @description Page number of notifications. */
                page?: number;
                /** @description Number of notifications in a page. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Notifications */
                        notifications: components["schemas"]["Resp_NotificationModel"][];
                        /** Notifications */
                        notifications_total: number;
                        /** Links */
                        links: {
                            /** Read */
                            read: string;
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Notifications.Get": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of notification. */
                notification_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Notification */
                        notification_id: number;
                        notification: components["schemas"]["Resp_NotificationModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Notifications.Read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description If notification_id is omitted, it's mark all existing notifications as read. */
                    notification_id?: number;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Tags.Popular": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Tags */
                        tags: {
                            [key: string]: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Tags.List": {
        parameters: {
            query?: {
                /** @description Page number of tags list. */
                page?: number;
                /** @description Number of results in a page. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Tags */
                        tags: {
                            [key: string]: string;
                        };
                        /** Tags */
                        tags_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Tags.Get": {
        parameters: {
            query?: {
                /** @description Page number of tagged contents. */
                page?: number;
                /** @description Number of tagged contents in a page. */
                limit?: number;
            };
            header?: never;
            path: {
                /** @description Id of tag. */
                tag_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Tag */
                        tag: {
                            /** Tag */
                            tag_id: number;
                            /** Tag */
                            tag_text: string;
                            /** Tag */
                            tag_use_count: number;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                            };
                        };
                        /** Tagged */
                        tagged: components["schemas"]["Resp_ThreadModel"][];
                        /** Tagged */
                        tagged_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Tags.Find": {
        parameters: {
            query: {
                /** @description tag to filter. Tags start with the query will be returned. */
                tag: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Tags */
                        tags: string[];
                        /** Ids */
                        ids: number[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Search.All": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Search query. Can be skipped if **user_id** is set. */
                    q?: string;
                    /** @description Tag to search for tagged contents. */
                    tag?: string;
                    /** @description Id of the container forum to search for contents. Child forums of the specified forum will be included in the search. */
                    forum_id?: number;
                    user_id?: components["schemas"]["UserIDModel"];
                    /** @description Page number of results. */
                    page?: number;
                    /** @description Number of results in a page. */
                    limit?: number;
                    /** @description The time in milliseconds (e.g. 1767214800) before last content date. */
                    before?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: components["schemas"]["Resp_ForumModel"][];
                        /** Data */
                        data_total: number;
                        /** Users */
                        users: components["schemas"]["Resp_UserModel"][];
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Search.Threads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Search query. Can be skipped if **user_id** is set. */
                    q?: string;
                    /** @description Tag to search for tagged contents. */
                    tag?: string;
                    /** @description Id of the container forum to search for contents. Child forums of the specified forum will be included in the search. */
                    forum_id?: number;
                    user_id?: components["schemas"]["UserIDModel"];
                    /** @description Page number of results. */
                    page?: number;
                    /** @description Number of results in a page. */
                    limit?: number;
                    /** @description Number of thread data to be returned. */
                    data_limit?: number;
                    /** @description The time in milliseconds (e.g. 1767214800) before last content date. */
                    before?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: components["schemas"]["Resp_ForumModel"][];
                        /** Data */
                        data_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Search.Posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Search query. Can be skipped if **user_id** is set. */
                    q?: string;
                    /** @description Tag to search for tagged contents. */
                    tag?: string;
                    /** @description Id of the container forum to search for contents. Child forums of the specified forum will be included in the search. */
                    forum_id?: number;
                    user_id?: components["schemas"]["UserIDModel"];
                    /** @description Page number of results. */
                    page?: number;
                    /** @description Number of results in a page. */
                    limit?: number;
                    /** @description Number of post data to be returned. */
                    data_limit?: number;
                    /** @description The time in milliseconds (e.g. 1767214800) before last content date. */
                    before?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: components["schemas"]["Resp_PostModel"][];
                        /** Data */
                        data_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Search.Users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Search query. */
                    q?: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: components["schemas"]["Resp_UserModel"][];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Search.ProfilePosts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Search query. Can be skipped if **user_id** is set. */
                    q?: string;
                    /** @description User ID to filter profile posts. */
                    user_id?: number;
                    /** @description Page number of results. */
                    page?: number;
                    /** @description Number of results in a page. */
                    limit?: number;
                    /** @description The time in milliseconds (e.g. 1767214800) before last content date. */
                    before?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: {
                            /** Content */
                            content_type: string;
                            /** Content */
                            content_id: number;
                            /** Profile */
                            profile_post_id: number;
                            /** Timeline */
                            timeline_user_id: number;
                            /** Poster */
                            poster_user_id: number;
                            /** Poster */
                            poster_username: string;
                            /** Poster */
                            poster_username_html: string;
                            /** Post */
                            post_create_date: number;
                            /** Post */
                            post_body: string;
                            /** Post */
                            post_like_count: number;
                            /** Post */
                            post_comment_count: number;
                            /** Timeline */
                            timeline_username: string;
                            /** User */
                            user_is_ignored: boolean;
                            /** Post */
                            post_is_published: boolean;
                            /** Post */
                            post_is_deleted: boolean;
                            /** Links */
                            links: {
                                /** Permalink */
                                permalink: string;
                                /** Detail */
                                detail: string;
                                /** Timeline */
                                timeline: string;
                                /** Timeline */
                                timeline_user: string;
                                /** Poster */
                                poster: string;
                                /** Likes */
                                likes: string;
                                /** Comments */
                                comments: string;
                                /** Report */
                                report: string;
                                /** Poster */
                                poster_avatar: string;
                            };
                            /** Permissions */
                            permissions: {
                                /** View */
                                view: boolean;
                                /** Edit */
                                edit: boolean;
                                /** Delete */
                                delete: boolean;
                                /** Like */
                                like: boolean;
                                /** Comment */
                                comment: boolean;
                                /** Report */
                                report: boolean;
                            };
                            timeline_user: components["schemas"]["Resp_UserModel"];
                        }[];
                        /** Data */
                        data_total: number;
                        /** Links */
                        links: {
                            /** Pages */
                            pages: number;
                            /** Page */
                            page: number;
                            /** Next */
                            next: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Search.Tagged": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Tag to search for tagged contents. */
                    tag?: string;
                    /** @description Array of tags to search for tagged contents. */
                    tags?: string[];
                    /** @description Page number of results. */
                    page?: number;
                    /** @description Number of results in a page. */
                    limit?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: components["schemas"]["Resp_ThreadModel"][];
                        /** Data */
                        data_total: number;
                        /** Search */
                        search_tags: {
                            160179: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Search.Results": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Search ID. */
                search_id: string | number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Page number of results. */
                    page?: number;
                    /** @description Number of results in a page. */
                    limit?: number;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Data */
                        data: components["schemas"]["Resp_ThreadModel"][];
                        /** Data */
                        data_total: number;
                        /** Search */
                        search_tags: {
                            160179: string;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Batch.Execute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Id
                     * @description identifier for the job, will be use in output as key of a result set. If this parameter is not set, the URI will be used.
                     */
                    id?: string;
                    /**
                     * Uri
                     * @description URI of the API request to execute.
                     */
                    uri: string;
                    /**
                     * Method
                     * @description HTTP method of the API request to execute. If this parameter is not set, GET HTTP method will be used.
                     * @enum {string}
                     */
                    method?: "GET" | "POST" | "PUT" | "DELETE";
                    /**
                     * Params
                     * @description parameters of the API request to execute.
                     */
                    params?: {
                        [key: string]: string;
                    };
                }[];
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Jobs */
                        jobs: {
                            /** JobId */
                            job_id: Record<string, never>;
                        };
                    };
                };
            };
            /** @description Error Response. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        errors?: string[];
                        system_info?: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    "Chatbox.Index": {
        parameters: {
            query?: {
                /** @description Room id. */
                room_id?: components["schemas"]["RoomIDModel"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Rooms */
                        rooms: {
                            /** Can */
                            can_report: boolean;
                            /** Eng */
                            eng: boolean;
                            /** Market */
                            market: boolean;
                            /** Room */
                            room_id: number;
                            /** Title */
                            title: string;
                        }[];
                        /** Ban */
                        ban: unknown;
                        /** Ignore */
                        ignore: {
                            /** Avatar */
                            avatar_date: number;
                            /** Background */
                            background_date: number;
                            /** Contest */
                            contest_count: number;
                            /** Custom */
                            custom_title: string;
                            /** Display */
                            display_banner_id: number;
                            /** Display */
                            display_icon_group_id: number;
                            /** Display */
                            display_style_group_id: number;
                            /** Is */
                            is_admin: boolean;
                            /** Is */
                            is_banned: boolean;
                            /** Is */
                            is_moderator: boolean;
                            /** Is */
                            is_staff: boolean;
                            /** Last */
                            last_activity: number;
                            /** Like */
                            like2_count: number;
                            /** Like */
                            like_count: number;
                            /** Message */
                            message_count: number;
                            /** Register */
                            register_date: number;
                            /** Rendered */
                            rendered: {
                                /** Username */
                                username: string;
                                /** Avatars */
                                avatars: {
                                    /** L */
                                    l: string;
                                    /** M */
                                    m: string;
                                    /** S */
                                    s: string;
                                };
                                /** Link */
                                link: string;
                            };
                            /** Short */
                            short_link: unknown;
                            /** Trophy */
                            trophy_points: number;
                            /** Uniq */
                            uniq_banner: unknown;
                            /** Uniq */
                            uniq_username_css: string;
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                        }[];
                        /** Permissions */
                        permissions: {
                            /** Delete Any Message */
                            deleteAnyMessage: boolean;
                            /** Edit Any Message */
                            editAnyMessage: boolean;
                            /** View Any Message */
                            viewAnyMessage: boolean;
                            /** View Messages */
                            viewMessages: boolean;
                            /** Post Message */
                            postMessage: boolean;
                            /** Ban */
                            ban: boolean;
                        };
                        /** Commands */
                        commands: string[];
                        /** Rooms Online */
                        roomsOnline: {
                            /** Chat */
                            "chat:0": number;
                        };
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Chatbox.GetMessages": {
        parameters: {
            query: {
                /** @description Room id. */
                room_id: components["schemas"]["RoomIDModel"];
                /** @description Message id to get older chat messages. */
                before_message_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Messages */
                        messages: components["schemas"]["Resp_ChatboxMessageModel"][];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.EditMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Message id. */
                    message_id: number;
                    /** @description New content of the chat message. */
                    message: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["Resp_ChatboxMessageModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.PostMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    room_id: components["schemas"]["RoomIDModel"];
                    /** @description ID of the message being replied to. */
                    reply_message_id?: number;
                    /** @description Content of the chat message. */
                    message: string;
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["Resp_ChatboxMessageModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.DeleteMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Message id. */
                    message_id: number;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.Online": {
        parameters: {
            query: {
                /** @description Room id. */
                room_id: components["schemas"]["RoomIDModel"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Users */
                        users: {
                            /** Avatar */
                            avatar_date: number;
                            /** Background */
                            background_date: number;
                            /** Contest */
                            contest_count: number;
                            /** Custom */
                            custom_title: string;
                            /** Display */
                            display_banner_id: number;
                            /** Display */
                            display_icon_group_id: number;
                            /** Display */
                            display_style_group_id: number;
                            /** Is */
                            is_admin: boolean;
                            /** Is */
                            is_banned: boolean;
                            /** Is */
                            is_moderator: boolean;
                            /** Is */
                            is_staff: boolean;
                            /** Last */
                            last_activity: number;
                            /** Like */
                            like2_count: number;
                            /** Like */
                            like_count: number;
                            /** Message */
                            message_count: number;
                            /** Register */
                            register_date: number;
                            /** Rendered */
                            rendered: {
                                /** Username */
                                username: string;
                                /** Avatars */
                                avatars: {
                                    /** L */
                                    l: string;
                                    /** M */
                                    m: string;
                                    /** S */
                                    s: string;
                                };
                                /** Link */
                                link: string;
                            };
                            /** Short */
                            short_link: string;
                            /** Trophy */
                            trophy_points: number;
                            /** Uniq */
                            uniq_banner: {
                                /** Banner */
                                banner_css: string;
                                /** Banner */
                                banner_text: string;
                                /** Banner */
                                banner_icon: string;
                                /** Username */
                                username_icon: string;
                            };
                            /** Uniq */
                            uniq_username_css: string;
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.ReportReasons": {
        parameters: {
            query: {
                /** @description Message id. */
                message_id: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Reasons */
                        reasons: string[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.Report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Message id. */
                    message_id: number;
                    /** @description Report reason. */
                    reason: string;
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.GetLeaderboard": {
        parameters: {
            query?: {
                /** @description Duration. */
                duration?: "day" | "week" | "month";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Leaderboard */
                        leaderboard: {
                            /** Count */
                            count: number;
                            /** User */
                            user_id: number;
                            /** Avatar */
                            avatar_date: number;
                            /** Background */
                            background_date: number;
                            /** Contest */
                            contest_count: number;
                            /** Custom */
                            custom_title: string;
                            /** Display */
                            display_banner_id: number;
                            /** Display */
                            display_icon_group_id: number;
                            /** Display */
                            display_style_group_id: number;
                            /** Is */
                            is_banned: boolean;
                            /** Last */
                            last_activity: number;
                            /** Like */
                            like2_count: number;
                            /** Like */
                            like_count: number;
                            /** Message */
                            message_count: number;
                            /** Register */
                            register_date: number;
                            /** Rendered */
                            rendered: {
                                /** Username */
                                username: string;
                                /** Avatars */
                                avatars: {
                                    /** L */
                                    l: string;
                                    /** M */
                                    m: string;
                                    /** S */
                                    s: string;
                                };
                                /** Link */
                                link: string;
                            };
                            /** Short */
                            short_link: unknown;
                            /** Trophy */
                            trophy_points: number;
                            /** Uniq */
                            uniq_banner: {
                                /** Banner */
                                banner_css: string;
                                /** Banner */
                                banner_text: string;
                                /** Banner */
                                banner_icon: string;
                            };
                            /** Uniq */
                            uniq_username_css: string;
                            /** Username */
                            username: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.GetIgnore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Ignored */
                        ignored: {
                            /** Avatar */
                            avatar_date: number;
                            /** Background */
                            background_date: number;
                            /** Contest */
                            contest_count: number;
                            /** Custom */
                            custom_title: string;
                            /** Display */
                            display_banner_id: number;
                            /** Display */
                            display_icon_group_id: number;
                            /** Display */
                            display_style_group_id: number;
                            /** Is */
                            is_banned: boolean;
                            /** Last */
                            last_activity: number;
                            /** Like */
                            like2_count: number;
                            /** Like */
                            like_count: number;
                            /** Message */
                            message_count: number;
                            /** Register */
                            register_date: number;
                            /** Rendered */
                            rendered: {
                                /** Username */
                                username: string;
                                /** Avatars */
                                avatars: {
                                    /** L */
                                    l: string;
                                    /** M */
                                    m: string;
                                    /** S */
                                    s: string;
                                };
                                /** Link */
                                link: string;
                            };
                            /** Short */
                            short_link: unknown;
                            /** Trophy */
                            trophy_points: number;
                            /** Uniq */
                            uniq_banner: unknown;
                            /** Uniq */
                            uniq_username_css: string;
                            /** User */
                            user_id: number;
                            /** Username */
                            username: string;
                        }[];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.PostIgnore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    user_id: components["schemas"]["UserIDModel"];
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Chatbox.DeleteIgnore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    user_id: components["schemas"]["UserIDModel"];
                };
            };
        };
        responses: {
            200: components["responses"]["SaveChanges"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
    "Forms.List": {
        parameters: {
            query?: {
                /** @description Page number of forms. */
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Forms */
                        forms: {
                            /** Form */
                            form_id: number;
                            /** Title */
                            title: string;
                            /** Description */
                            description: string;
                            /** Fields */
                            fields: {
                                /** Field */
                                field_id: number;
                                /** Title */
                                title: string;
                                /** Field Choices */
                                fieldChoices: {
                                    /** Buy */
                                    buy: string;
                                    /** Sell */
                                    sell: string;
                                };
                                /** Required */
                                required: number;
                                /** Max */
                                max_length: number;
                                /** Default */
                                default_value: string;
                            }[];
                        }[];
                        /** Forms Per Page */
                        formsPerPage: number;
                        /** Page */
                        page: number;
                        /** Total Forms */
                        totalForms: number;
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
        };
    };
    "Forms.Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Form ID
                     * @default 1
                     * @enum {integer}
                     */
                    form_id: 1;
                    fields: {
                        /** @description Amount to be sent. */
                        8: number;
                        /** @description Amount to be received. */
                        11: number;
                        /** @description Note to the exchange */
                        14?: string;
                        /**
                         * @description Where from.
                         * @enum {string}
                         */
                        15?: "market" | "ru_1" | "ru_2" | "ru_3" | "ru_4" | "ru_5" | "ru_6" | "ru_7" | "ru_8" | "ru_9" | "ru_10" | "ru_11" | "ua_1" | "ua_2" | "ua_3" | "ua_4" | "ua_5" | "ua_6" | "ua_7" | "ua_8" | "kz_1" | "kz_2" | "kz_3" | "kz_4" | "kz_5" | "kz_6" | "kz_7" | "kz_8" | "by_1" | "by_2" | "by_3" | "by_4" | "by_5" | "by_6" | "by_7" | "by_8" | "by_9" | "sbp" | "cr_1" | "cr_2" | "cr_3" | "cr_4" | "cr_5" | "cr_6" | "cr_7" | "cr_8" | "cr_12" | "cr_9" | "cr_10" | "cr_11" | "ot_1" | "ot_2" | "ot_3" | "ot_4" | "cr_13" | "by_10";
                        /**
                         * @description Currency where from.
                         * @enum {string}
                         */
                        16?: "rub" | "dollar" | "euro" | "uah" | "tenge" | "byn";
                        /**
                         * @description Where to.
                         * @enum {string}
                         */
                        17?: "market" | "ru_1" | "ru_2" | "ru_3" | "ru_4" | "ru_5" | "ru_6" | "ru_7" | "ru_8" | "ru_9" | "ru_10" | "ru_11" | "ua_1" | "ua_2" | "ua_3" | "ua_4" | "ua_5" | "ua_6" | "ua_7" | "ua_8" | "kz_1" | "kz_2" | "kz_3" | "kz_4" | "kz_5" | "kz_6" | "kz_7" | "kz_8" | "by_1" | "by_2" | "by_3" | "by_4" | "by_5" | "by_6" | "by_7" | "by_8" | "by_9" | "sbp" | "cr_1" | "cr_2" | "cr_3" | "cr_4" | "cr_5" | "cr_6" | "cr_7" | "cr_8" | "cr_12" | "cr_9" | "cr_10" | "cr_11" | "ot_1" | "ot_2" | "ot_3" | "ot_4" | "cr_13" | "by_10";
                        /**
                         * @description Currency where to.
                         * @enum {string}
                         */
                        18?: "rub" | "dollar" | "euro" | "uah" | "tenge" | "byn";
                    };
                } | {
                    /**
                     * @description Form ID
                     * @default 3
                     * @enum {integer}
                     */
                    form_id: 3;
                    fields: {
                        /** @description Offender's nickname */
                        22?: string;
                        /**
                         * @description Complaint reason
                         * @enum {string}
                         */
                        23?: "cp_re_1" | "cp_re_2" | "cp_re_3" | "cp_re_4" | "cp_re_5" | "cp_re_6" | "cp_re_7" | "cp_re_8" | "cp_re_9" | "cp_re_10" | "cp_re_11" | "cp_re_12" | "cp_re_13" | "cp_re_other";
                        /** @description Complaint description */
                        24: string;
                        /** @description Complaint reason / Other */
                        27?: string;
                        /** @description Moderator's nickname */
                        28?: string;
                        /** @description Link to appealed complaint */
                        29?: string;
                        /** @description Thread title */
                        30?: string;
                    };
                };
            };
        };
        responses: {
            /** @description Successful Response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Message */
                        message: string;
                        content: components["schemas"]["Resp_ThreadModel"];
                        system_info: components["schemas"]["Resp_SystemInfo"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["NoPermission"];
            404: components["responses"]["NotFound"];
        };
    };
}
