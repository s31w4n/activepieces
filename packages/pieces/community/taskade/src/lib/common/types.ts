export interface ListAPIResponse<T> {
	ok: boolean;
	items: Array<T>;
}

export interface BaseResponse {
	id: string;
	name: string;
}

export type WorkspaceResponse = BaseResponse;
export type WorkspaceFolderResponse = BaseResponse;
export type ProjectResponse = BaseResponse;

export interface CreateTaskParams {
	contentType: string;
	content: string;
	placement: string;
}

export interface TaskResponse {
	id: string;
	text: string;
	parentId: string;
	completed: boolean;
}

export interface CreateTaskDateParams {
	start: {
		date: string;
		time: string;
	};
	end?: {
		date: string;
		time: string;
	};
}
