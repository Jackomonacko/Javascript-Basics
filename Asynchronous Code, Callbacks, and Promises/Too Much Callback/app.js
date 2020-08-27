const btn = document.querySelector('button');

const moveIt = (element, amount, delay, onSuc, onFail) => {
	setTimeout(() => {
		const widthy = document.body.clientWidth;
		const rightEl = element.getBoundingClientRect().right;
		const currentLeft = element.getBoundingClientRect().left;
		if (rightEl + amount > widthy) {
			onFail();
		} else {
			element.style.transform = `translateX(${currentLeft + amount}px)`;
			onSuc();
		}
	}, delay);
};

moveIt(
	btn,
	300,
	1000,
	() => {
		//success callback
		moveIt(
			btn,
			300,
			1000,
			() => {
				//success callback
				moveIt(
					btn,
					300,
					1000,
					() => {
						//success callback
						moveIt(
							btn,
							300,
							1000,
							() => {
								//success callback
								moveIt(
									btn,
									300,
									1000,
									() => {
										//success callback
										alert('YOU HAVE A WIDE SCREEN!');
									},
									() => {
										//failure callback
										alert('CANNOT MOVE FURTHER!');
									}
								);
							},
							() => {
								//failure callback
								alert('CANNOT MOVE FURTHER!');
							}
						);
					},
					() => {
						//failure callback
						alert('CANNOT MOVE FURTHER!');
					}
				);
			},
			() => {
				//failure callback
				alert('CANNOT MOVE FURTHER!');
			}
		);
	},
	() => {
		//failure callback
		alert('CANNOT MOVE FURTHER!');
	}
);
