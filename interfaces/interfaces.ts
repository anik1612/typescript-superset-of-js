// using interface

interface RectangleOptions {
	width: number;
	length: number;
}

const drawRectangle = (options: RectangleOptions) => {
	const width = options.width;
	const length = options.length;
};

// without interface

const drawRectangleWithoutInterfaces = (options: {
	width: number;
	length: number;
}) => {
	const width = options.width;
	const length = options.length;
};
