export default Object.freeze({
	APP_VERSION: process.env.npm_package_version,
	APP_NAME: 'degen',
	
	DB_NAME_DEGEN: 'degen',
	DB_NAME_NEXTAUTH: 'nextauth',
	
	DB_COLLECTION_TIMECARDS: 'timecards',
	DB_COLLECTION_GUEST_USERS: 'guestUsers',
	DB_COLLECTION_BOUNTIES: 'bounties',
	
	DB_COLLECTION_POAP_ADMINS: 'poapAdmins',
	DB_COLLECTION_POAP_SETTINGS: 'poapSettings',
	DB_COLLECTION_POAP_PARTICIPANTS: 'poapParticipants',
	DB_COLLECTION_ADDITIONAL_POAP_PARTICIPANTS_LIST: 'additionalPoapParticipantsList',

	DB_COLLECTION_POAP_UNCLAIMED_PARTICIPANTS: 'poapUnclaimedParticipants',
	DB_COLLECTION_POAP_TWITTER_UNCLAIMED_PARTICIPANTS: 'poapTwitterUnclaimedParticipants',
	DB_COLLECTION_POAP_TWITTER_SETTINGS: 'poapTwitterSettings',
	DB_COLLECTION_POAP_TWITTER_PARTICIPANTS: 'poapTwitterParticipants',
	
	DB_COLLECTION_NEXT_AUTH_SESSIONS: 'sessions',
	DB_COLLECTION_NEXT_AUTH_ACCOUNTS: 'accounts',
	
	DB_COLLECTION_DISCORD_USERS: 'discordUsers',
	DB_COLLECTION_DISCORD_SERVERS: 'discordServers',
	
	MONGODB_URI_PARTIAL: `${process.env.MONGODB_PREFIX}://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}/`,
	MONGODB_OPTIONS: '?retryWrites=true&w=majority',
	
	POAP_REQUIRED_PARTICIPATION_DURATION: Number(process.env.POAP_REQUIRED_PARTICIPATION_DURATION),
	POAP_MAX_DURATION_MINUTES: Number(process.env.POAP_MAX_EVENT_DURATION_MINUTES),
	
	PLATFORM_TYPE_DISCORD: 'DISCORD',
	PLATFORM_TYPE_TWITTER: 'TWITTER',
	
	DISTRIBUTION_METHOD_DM: 'DIRECT_MESSAGE',
	DISTRIBUTION_METHOD_CLAIM: 'CLAIM',
	
	POAP_ADMIN_TYPE_ENUM_USER: 'USER',
	POAP_ADMIN_TYPE_ENUM_ROLE: 'ROLE',
});