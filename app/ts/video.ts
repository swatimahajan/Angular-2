export class Video {
	id: nummber;
	title: string;
	videocode: string;
	desc: string;

	constructor(id: nummber, title: string, videocode: string, desc: string){
		this.id = id;
		this.title = title;
		this.videocode = videocode;
		this.desc = desc;
	}
}