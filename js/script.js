function row_plus(id, flag_down_ok){

			var n_id = parseInt(id.match(/\d+/g).map(Number));
			var ch = id.charAt(0);
			var ne_ = document.getElementById(id).name;
			// var ne_int = parseInt(ne_);
			
			// console.log('new id : '+new_id , ch);
			// console.log("row id " + row);
	if(n_id==1 || flag_down_ok ==1){
			if(row <= n_id){
				
				var new_id = n_id +1;
				var x = `<tr id="${new_id}">
								<td id="a_${new_id}.td"><button id="a_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id+ (2 * n_id)}"><i id="a_${new_id}.icon"></i></button></td>
								<td id="b_${new_id}.td"><button id="b_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 1}"><i id="b_${new_id}.icon"></i></button></td>
								<td id="c_${new_id}.td"><button id="c_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 2}"><i id="c_${new_id}.icon"></i></button></td>
								<td id="d_${new_id}.td"><button id="d_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id+ (2 * n_id) + 3}"><i id="d_${new_id}.icon"></i></button></td>
								<td id="e_${new_id}.td"><button id="e_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 4}"><i id="e_${new_id}.icon"></i></button></td>
								<td id="f_${new_id}.td"><button id="f_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 5}"><i id="f_${new_id}.icon"></i></button></td>
								<td id="g_${new_id}.td"><button id="g_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id+ (2 * n_id) + 6}"><i id="g_${new_id}.icon"></i></button></td>
								<td id="h_${new_id}.td"><button id="h_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 7}"><i id="h_${new_id}.icon"></i></button></td>
								<td id="i_${new_id}.td"><button id="i_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 8}"><i id="i_${new_id}.icon"></i></button></td>
							</tr>`

				var h = document.getElementById(n_id.toString());
				h.insertAdjacentHTML("beforeBegin", x);
				row++;
			
			}else{
				 return;
			}


			return ttl_rows = ttl_rows + 1;
			
		}


}
function check_down(id){
	var id_n = parseInt(id.match(/\d+/g).map(Number));
	var id_x = id.charAt(0).toString();
	var idd = id_x + "_" + (id_n -1).toString();
	//var z_per = null;
	var flag_down_ok = 0;
	// console.log("id x : " + idd);
	if(id_n>1){
		var z_per =  document.getElementById(idd).value;
		if(z_per != "empty"){
			return flag_down_ok = 1;
		}else{
			return flag_down_ok = 0;
		}
	}else{
		return flag_down_ok = 1;
	}

}

function draw_ico(id, flag_down_ok){
	var z =  document.getElementById(id).value;
	// var ttl_ =  document.getElementById(id);
	// var ttl_r = parseInt(ttl.match(/\d+/g).map(Number));
	
	if(flag_down_ok == 1){
		
		if(a == 0 && z=="empty"){
				document.getElementById(id+".icon").className = "fas fa-times";
				document.getElementById(id).style.backgroundColor = "red";
				document.getElementById("player").innerHTML = "Player2's Turn";
				document.getElementById(id).value = "cross";
				a++;
				//b++;
		}else if(z == "empty"){
				document.getElementById(id).value = "circle";
				document.getElementById(id+".icon").className = "fas fa-circle";
				document.getElementById(id).style.backgroundColor = "blue";
				document.getElementById("player").innerHTML = "Player1's Chance";
				a--;
				//b++;

		}

	}
}




function check_winner(){

	// var set_1,set_2,set_3,set_4;
	
	
	function check_set(set){
				out0 = set[0];
				out1 = set[1];
				out2 = set[2];
				out3 = set[3];

				console.log(out0,out1,out2,out3);
				var q_out0 = document.getElementById(out0).value;
				var q_out1 = document.getElementById(out1).value;
				var q_out2 = document.getElementById(out2).value;
				var q_out3 = document.getElementById(out3).value;
				if(q_out0 == "cross" && q_out1 == "cross" && q_out2 == "cross" && q_out3 == "cross"){
					out = [true,"cross",[out0,out1,out2,out3]];
				}else if(q_out0 == "circle" && q_out1 == "circle" && q_out2 == "circle" && q_out3 == "circle"){
					out = [true,"circle",[out0,out1,out2,out3]];
				}

				if(out[0]){
					var pos = out[2];
					document.getElementById(pos[0]+".icon").style.color = "yellow";
					document.getElementById(pos[1]+".icon").style.color = "yellow";
					document.getElementById(pos[2]+".icon").style.color = "yellow";
					document.getElementById(pos[3]+".icon").style.color = "yellow";
				}

				var sign = out[1];

			if(sign == "cross"){
				document.getElementById("winner").innerHTML = "Player1's Wins";
				document.getElementById("player").innerHTML = "🎉🎉";
			}if(sign == "circle"){

				document.getElementById("winner").innerHTML = "Player2's Wins";
				document.getElementById("player").innerHTML = "🎉🎉";
			}
				// console.log("***out is : " + out);
				// console.log(q_out0,q_out1,q_out2);
	}
	var x =1;
	while(x <= ttl_rows){
		// console.log("x is " + x);

		//check the L to R (strate)
		var win_set_1 = [`a_${x}`, `b_${x}`, `c_${x}`, `d_${x}`];
		var win_set_n2 = [`b_${x}`, `c_${x}`, `d_${x}`, `e_${x}`];
		var win_set_n3 = [`c_${x}`, `d_${x}`, `e_${x}`, `f_${x}`];
		var win_set_n4 = [`d_${x}`, `e_${x}`, `f_${x}`, `g_${x}`];
		var win_set_n5 = [`e_${x}`, `f_${x}`, `g_${x}`, `h_${x}`];
		var win_set_n6 = [`f_${x}`, `g_${x}`, `h_${x}`, `i_${x}`];
		
		check_set(win_set_1);
		check_set(win_set_n2);
		check_set(win_set_n3);
		check_set(win_set_n4);
		check_set(win_set_n5);
		check_set(win_set_n6);
		// var set_2 = check_set(win_set_2);

		if(ttl_rows>=3 && x <= ttl_rows - 2){
			//check X (down left to up right)
			var win_set_3 = [`a_${x}`, `b_${x+1}`, `c_${x+2}`, `d_${x+3}`];
			var win_set_n13 = [`b_${x}`, `c_${x+1}`, `d_${x+2}`, `e_${x+3}`];
			var win_set_n23 = [`c_${x}`, `d_${x+1}`, `e_${x+2}`, `f_${x+3}`];
			var win_set_n33 = [`d_${x}`, `e_${x+1}`, `f_${x+2}`, `g_${x+3}`];
			var win_set_n43 = [`e_${x}`, `f_${x+1}`, `g_${x+2}`, `h_${x+3}`];
			var win_set_n53 = [`f_${x}`, `g_${x+1}`, `h_${x+2}`, `i_${x+3}`];
			
			//check X (up left to down right)
			var win_set_4 = [`a_${x+3}`, `b_${x+2}`, `c_${x+1}`, `d_${x}`];
			var win_set_n14 = [`b_${x+3}`, `c_${x+2}`, `d_${x+1}`, `e_${x}`];
			var win_set_n24 = [`c_${x+3}`, `d_${x+2}`, `e_${x+1}`, `f_${x}`];
			var win_set_n34 = [`d_${x+3}`, `e_${x+2}`, `f_${x+1}`, `g_${x}`];
			var win_set_n44 = [`e_${x+3}`, `f_${x+2}`, `g_${x+1}`, `h_${x}`];
			var win_set_n54 = [`f_${x+3}`, `g_${x+2}`, `h_${x+1}`, `i_${x}`];
			
			// check up and down
			var win_set_5 = [`a_${x}`, `a_${x+1}`, `a_${x+2}`, `a_${x+3}`];
			var win_set_6 = [`b_${x}`, `b_${x+1}`, `b_${x+2}`, `b_${x+3}`];
			var win_set_7 = [`c_${x}`, `c_${x+1}`, `c_${x+2}`, `c_${x+3}`];
			var win_set_n17 = [`d_${x}`, `d_${x+1}`, `d_${x+2}`, `d_${x+3}`];
			var win_set_n27 = [`e_${x}`, `e_${x+1}`, `e_${x+2}`, `e_${x+3}`];
			var win_set_n37 = [`f_${x}`, `f_${x+1}`, `f_${x+2}`, `f_${x+3}`];
			var win_set_n47 = [`g_${x}`, `g_${x+1}`, `g_${x+2}`, `g_${x+3}`];
			var win_set_n57 = [`h_${x}`, `h_${x+1}`, `h_${x+2}`, `h_${x+3}`];
			var win_set_n67 = [`i_${x}`, `i_${x+1}`, `i_${x+2}`, `i_${x+3}`];

			check_set(win_set_4);
			check_set(win_set_3);
			check_set(win_set_5);
			check_set(win_set_6);
			check_set(win_set_7);

			//
			check_set(win_set_n13);
			check_set(win_set_n23);
			check_set(win_set_n33);
			check_set(win_set_n43);
			check_set(win_set_n53);

			//
			check_set(win_set_n17);
			check_set(win_set_n27);
			check_set(win_set_n37);
			check_set(win_set_n47);
			check_set(win_set_n57);
			check_set(win_set_n67);

			//
			check_set(win_set_n14);
			check_set(win_set_n24);
			check_set(win_set_n34);
			check_set(win_set_n44);
			check_set(win_set_n54);
		}
		
		// console.log("win_set is " + win_set_1);
		x=x+1;
		
		
	}
	// console.log("x is " + x + "  row is :" + row);
	delete x;

	
}


