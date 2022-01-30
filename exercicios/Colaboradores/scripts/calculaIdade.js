class calculaIdade {
	calculaIdade(dataNascimento, dataAtual) {
		var dataNasc = dataNascimento.split("/")
		var ano = dataNasc[2]
		var mes = dataNasc[1]
		var dia = dataNasc[0]

		var dataAtu = dataAtual.split("/")
		var anoAtual = dataAtu[2]
		var mesAtual = dataAtu[1]
		var diaAtual = dataAtu[0]

		if (anoAtual >= ano) {
			if (mesAtual >= mes) {
				if (diaAtual >= dia) {
					var idade = anoAtual - ano
					var idadeMes = mesAtual - mes
					var idadeDia = diaAtual - dia

					return (
						idade + " Anos, " + idadeMes + " Meses e " + idadeDia + " Dias."
					)
				} //Ano >= e Mes >= Dia <
				else {
					if (mesAtual > mes) {
						var idade = anoAtual - ano
						var idadeMes = mesAtual - mes
						idadeMes--
						var idadeDia = diaAtual - dia
						//idadeDia += 30;
						if (mesAtual == 1) {
							idadeDia += this.calculaDiasMes(12, anoAtual)
							//idadeDia += 30;
						} else {
							//                            console.log('enviando mes: '+(mesAtual-1)+' ano:'+anoAtual);
							idadeDia += this.calculaDiasMes(mesAtual - 1, anoAtual)
						}
						return (
							idade + " Anos, " + idadeMes + " Meses e " + idadeDia + " Dias."
						)
					} //Ano >= e Mes < Dia <
					else {
						if (anoAtual > ano) {
							var idade = anoAtual - ano
							idade--
							var idadeMes = mesAtual - mes
							idadeMes += 12 - 1
							var idadeDia = diaAtual - dia
							//idadeDia += 30;
							if (mesAtual == 1) {
								idadeDia += this.calculaDiasMes(12, anoAtual)
								//idadeDia += 30;
							} else {
								//                                console.log('enviando mes: '+(mesAtual-1)+' ano:'+anoAtual);
								idadeDia += this.calculaDiasMes(mesAtual - 1, anoAtual)
							}
							return (
								idade + " Anos, " + idadeMes + " Meses e " + idadeDia + " Dias."
							)
						} //Ano < e Mes < Dia <
						else {
							return "Dados Incompatíveis"
						}
					}
				}
			} //Ano >= e Mes <
			else {
				if (anoAtual > ano) {
					if (diaAtual >= dia) {
						var idade = anoAtual - ano
						idade--
						var idadeMes = mesAtual - mes
						idadeMes += 12
						var idadeDia = diaAtual - dia

						return (
							idade + " Anos, " + idadeMes + " Meses e " + idadeDia + " Dias."
						)
					} //Ano > e Mes < e Dia <
					else {
						var idade = anoAtual - ano
						idade--
						var idadeMes = mesAtual - mes
						idadeMes += 12 - 1
						var idadeDia = diaAtual - dia
						//idadeDia += 30;
						//Dependendo do mês (31, 30, 29, 28)
						if (mesAtual == 1) {
							idadeDia += this.calculaDiasMes(12, anoAtual)
							//idadeDia += 30;
						} else {
							//                           console.log('enviando mes: '+(mesAtual-1)+' ano:'+anoAtual);
							idadeDia += this.calculaDiasMes(mesAtual - 1, anoAtual)
						}

						return (
							idade + " Anos, " + idadeMes + " Meses e " + idadeDia + " Dias."
						)
					}
				} //Ano < e Mes <
				else {
					return "Dados Incompatíveis"
				}
			}
		} else {
			return "Dados Incompatíveis"
		}
	}

	calculaDiasMes(mesRecente, anoRecente) {
		//       console.log('Recebido mes: '+mesRecente);
		//        console.log('Recebido ano: '+anoRecente);
		//        console.log('Valor resto da divisao: '+(anoRecente % 4));
		if (mesRecente == 2) {
			if (anoRecente % 4 == 0) {
				//                console.log('retornei 29 dias');
				return 29
			} else {
				//               console.log('retornei 28 dias');
				return 28
			}
		}
		if (
			(mesRecente = 1) ||
			(mesRecente = 3) ||
			(mesRecente = 5) ||
			(mesRecente = 7) ||
			(mesRecente = 8) ||
			(mesRecente = 10) ||
			(mesRecente = 12)
		) {
			//            console.log('retornei 31 dias');
			return 31
		}
		if (
			(mesRecente = 4) ||
			(mesRecente = 6) ||
			(mesRecente = 9) ||
			(mesRecente = 11)
		) {
			//            console.log('retornei 30 dias');
			return 30
		}
	}
}
