import newUniqueId from 'locally-unique-id-generator';

export function getNewUniqueId(): string {
	return newUniqueId();
}
