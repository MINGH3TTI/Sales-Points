const businessData = {
centro: [
    { name: 'Avenida Andaló', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
       { 
            name: 'Doce lar', 
            address: 'Av. Dr. Alberto Andaló, 2964 - Centro, São José do Rio Preto - SP, 15015-000', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-8399',
            hours: 'Segunda a Sexta: 08:30 - 18:00<br>Sábado: 09:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOPY0i5j7o7babVEhrUCQZTQsYKlksrocAlnlDY=s1360-w1360-h1020-rw'
        },
    ]},
    { name: 'Rua Tiradentes', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Espetinho Catedral', 
            address: 'R. Tiradentes, 3093 - Parque Industrial, São José do Rio Preto - SP, 15025-050', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99219-8980',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 14:00',
        },
        { 
            name: 'Restaurante Turiuba', 
            address: 'R. Tiradentes, 3093 - Centro, São José do Rio Preto - SP, 15010-030', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3222-7027',
            hours: 'Segunda a Sexta: 07:00 - 18:00<br>Sábado: 07:00 - 16:00',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhhpI5RfCenfnf6Wl6DOhEsG6MRB7y50OUA&s'
        },
    ]},
    { name: 'Rua Coronel', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Gaúcho', 
            address: 'R. Cel. Spínola de Castro, 4496 - Centro, São José do Rio Preto - SP, 15015-500', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 98199-1229',
            hours: 'Segunda a Sexta: 17:00 - 23:00<br>Sábado: 17:00 - 01:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMBAIQWjNh4AcusPk6g_T_ToihsdfrjMphwee8a=w325-h218-n-k-no'
        },
        { 
            name: 'Reino Motos', 
            address: 'R. Cel. Spínola de Castro, 2744 - Centro, São José do Rio Preto - SP, 15015-500', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3212-8125',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipObuJc8aViBUdKHGCGRgryCIeYaYZjGh1GZoyMn=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Avendajoli Armarinhos', 
            address: 'R. Cel. Spínola de Castro, 2831 - Centro, São José do Rio Preto - SP, 15015-500', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3233-4805',
            hours: 'Segunda a Sexta: 08:45 - 18:00<br>Sábado: 08:45 - 13:00',
            imageUrl: 'data:image/jpeg;base64,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'
        },
        { 
            name: 'Cartonagem 2 irmãos', 
            address: 'R. Cel. Spínola de Castro, 2990 - Centro, São José do Rio Preto - SP, 15015-500', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-4352',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOtR4pRCDEz22NnM3Kruyjx2oFDe40zJsoXTmug=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Elec Cell', 
            address: 'R. Cel. Spínola de Castro, 2985 - Centro, São José do Rio Preto - SP, 15015-500', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 98842-6556',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 14:00',
            imageUrl: 'https://lh3.googleusercontent.com/proxy/yI5SWT-gQNr099c4RGvfQxlyK_WvHiR0M0WweR44SRv5qb3RMKn3P9aI2-TQJmgcUoNg06rP09qSg-4XxsC0XBSsyvoZ4Y6YhBeKXn6keFoSQWgFMl7d0MZsLPCWSC_vypS44GZi2sNdULdMh0J4B9UleNf-d_dpjiHvpQ=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Beba Cotuba Lanchonete Toquinho', 
            address: 'R. Cel. Spínola de Castro, 3088 - Centro, São José do Rio Preto - SP, 15015-500', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99111-4924',
            hours: '',
            imageUrl: 'img/pontodevenda/toquinho.png'
        },
        { 
            name: 'Elos Textil', 
            address: 'R. Cel. Spínola de Castro, 3277 - Centro, São José do Rio Preto - SP, 15015-500', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3121-6330',
            hours: 'Segunda a Sexta: 08:00 - 17:00',
            imageUrl: 'https://lh3.googleusercontent.com/proxy/mL7lknGxM-yiWGuy2izCi-9vbr7Qr7Tf9bLPP2Qs5fhYJCzo9HxMwQkZf2RIM2j_gRUpxDECHVQEDzPsFf982WrcN8I6kmIkeefiIPO6cBfpriK_x0f1APdQMTx5Cdqqz211BPh39SaC1NPIA6w9HIWHBA0sWP_Q_JCgBg=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Estacionamento setparque 2', 
            subtitle: 'Clique para ver a Localização',
            address: '', 
            phone: '',
            hours: '',
            imageUrl: ''
        },

    ]},
    { name: 'Rua General Glicério', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
          { 
            name: 'Rio Modas', 
            address: 'R. Gen. Glicério, 2636 - Centro, São José do Rio Preto - SP, 15015-400', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-8399',
            hours: 'Segunda a Sexta: 9:00 - 18:00<br>Sábado: 08:00 - 14:00',
            imageUrl: 'https://lh3.googleusercontent.com/proxy/ze84RXQZcSsFAIPJmS5WB9W8QCHL0WCBQdqVnMRecFtxGlT2gIGuFMacZaKCA29BPHDRYlkbVgDhC9QXyZtd6b8JXlHGE9Qb2NlXLFHAXi9eAQtb0sqicQFYPu02Tae7wuaNkMMPH3gBtJAdoM-QocdcivnEk44VfOa7zQ=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Bar General', 
            address: 'R. Gen. Glicério, 3196 - Centro, São José do Rio Preto - SP, 15102-006', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-1386',
            hours: 'Segunda a Sabado: 06:00 - 20:00',
            imageUrl: 'https://lh3.googleusercontent.com/proxy/GAC0oSp0vLdUdfSGWcxlBiq5DauNYLo1Nuec0RJn6KGqgYmLhTFSLimwjLple9hpzDFDa7muH-5oKLVBi14V7uW1a-YAwqminKt8ZLNc7EY4nIg0ZcPlV3KNujkvSXKAxThGKq7Cn3IUMFYrsLbPDihzybYBClhmMEAgRA=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Estilo Lanchonete', 
            address: 'Rua General Glicerio 3370 Centro, São José do Rio Preto, Estado de São Paulo 15015-400', 
            subtitle: 'Clique para ver a Localização',
            phone: '',
            hours: '',
            imageUrl: ''
        },
        { 
            name: 'Confeitaria do Leo', 
            address: 'R. Gen. Glicério, 3532 - Centro, São José do Rio Preto - SP, 15015-400', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3234-4080',
            hours: 'Segunda a Sexta: 07:00 - 18:00<br>Sábado: 07:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no3g5aG-2SNAwtRAoojGiGiwNCmk3Z1YCOx7QxYwYNrDk808kSDfHElbbC9kwmLQFDLurt27mcyZc6oLNXv_0JjbNmwXUKfsUQZeULVNsAl-NrIstbekPoizvX7Kx89GJ_xbAMN4w=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Ponto Smart', 
            address: 'R. Gen. Glicério, 3695 - Loja 5 - Centro, São José do Rio Preto - SP, 15015-400', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99716-4005',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOufvxIQGKlYGh2H9Yezg2Z0h0G00b_i3w4STJH=s1360-w1360-h1020-rw'
        }
    ]},
    { name: 'Rua Antonio de Godoy', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Padaria todo dia', 
            address: 'R. Antônio de Godoy, 2929 - Centro, São José do Rio Preto - SP, 15015-100', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-2088',
            hours: 'Segunda a Sexta: 06:00 - 19:00<br>Sábado: 06:00 - 18:30<br>Domingo: 06:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqI2vTLza06tw9OPsfieSXpD91mzwko-8CCfRug7O0gPdB_zkpnz5L1wyDJZYWouPE2Fnfe0oS7alTmcODd6M4HV_xkPYFXpbSciC3MPxtuMLYZc9ceLJtzMjVQZw6nUwzrWOTWFQ=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Pastelaria Palmeiras', 
            address: 'R. Antônio de Godoy, 3048 - Box 5 - Centro, São José do Rio Preto - SP, 15015-100', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99140-0893',
            hours: 'Segunda a Sexta: 07:00 - 18:00<br>Sábado: 07:00 - 16:00<br>Domingo: 07:00 - 14:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npvKglIOaqmFAa5gi643hcTH6ubV9WUrAz9WzSPLggGz-3Zi4codv-CQ1P-y87QWVNkZCrKm_jzGpqJbIB8baOlDyHsOG3flOEQvJoVpWKDaJ1J7TTXqJlQ-FKvk1B9cALtubM5Mw=w243-h174-n-k-no-nu', 
        },
        { 
            name: 'Meire Maiuny', 
            address: 'R. Antônio de Godoy, 2979 - Centro, São José do Rio Preto - SP, 15015-000', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 98115-4826',
            hours: 'Segunda a Sexta: 08:30 - 17:30<br>Sábado: 08:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noLHlcfpzZaCnS9i6-Ls-_ev6YKM7bmyQTz9viJDejYUcJgLHkz8V9WH5D_OFJ16hNVJDly9KPMFRbkYfCgjb1mtWmIgKXPtLub4e2Xb2S1TgEq_fGJAVxc39o-FfjyiBEO4LYrEw=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Miau PetShop', 
            address: 'R. Antônio de Godoy, 3453 - Centro, São José do Rio Preto - SP, 15015-100', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99209-0989',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 14:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipN7HdusYo1hOlaiMyYsjUckC86smVUEFT4zRaa_=s1360-w1360-h1020-rw'
        },
        
    ]},
    { name: 'Rua XV Novembro', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Estacionamento California', 
            address: 'R. XV de Novembro, 3366 - Centro, São José do Rio Preto - SP, 15015-110', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99715-1008',
            hours: '',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOkUbCZg8X8lqrccbE55F1VztlQfPgaek0xhGLU=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Rio Mel', 
            address: 'R. XV de Novembro, 3525 - Centro, São José do Rio Preto - SP, 15015-110', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-8399',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noTdZAsaz4241y-CeUucV6RaCvUx9vmxtP30hxAZJwnGlRbNl6ubHEk8XcWlX2NwB4oOBEm1UqFf1KRUmUumg0cxB7vRPRsy2p_rZLU6dFCg95zVgjtrTg6O0pvWZbBQBuMLXjw=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Casa das Pimentas', 
            address: 'R. XV de Novembro, 2985 - Centro, São José do Rio Preto - SP, 15015-110', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-5553',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNBoUMWKBJ9ENinla5vIS9vH8uL0xN_3B97k6bV=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Otica Vivalux Ltda', 
            address: 'R. XV de Novembro, 3192 - Centro - Centro, São José do Rio Preto - SP, 15015-110', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99117-8771',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/proxy/JRJEg_TFFlW09mJXGlQ2ZZpDWIA_tHnCvrucnHacaPU50Aeik2Ra0cM9HDzz7BDetKsIxrO4hhkoWJjeo6Vkc99Sv7ERbmGmKIqlMzOO6N7NdvATl4ZdF9ngUdyr_2VmXeub_-zkLIi2LxY54ln6ily2gKIt2NZ9QG1hzg=s1360-w1360-h1020-rw'
        }
    ]},
    { name: 'Rua Marechal', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Marrom Café', 
            address: 'Rua Marechal Deodoro da Fonseca, 3123 - Centro, São José do Rio Preto - SP, 15010-070', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17)3305-5525',
            hours: 'Segunda a Sexta: 07:00 - 18:00<br>Sábado: 07:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrZR5aIe9vy_uBc4fV4bdS2AXCKzoop9Qa07PZpdi87sb0NWvhUEZ4uu4T9osibwqY7oHH95S6ADBKI0cWdCMN4UBWQTV-uU-D37_ZACNoyX4StZZIS3odsyoy1IwEtHW9vaXgUVA=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Brito Lanches', 
            address: ' Rua Marechal Deodoro da Fonseca, 3316 - Centro, São José do Rio Preto - SP, 15010-070', 
            subtitle: 'Clique para ver a Localização',
            phone: ' (17) 3233-3741',
            hours: 'Segunda a Sexta: 07:30 - 17:30<br>',
            imageUrl: 'img/pontodevenda/brito.png'
        },
        { 
            name: 'Casa do sapateiro', 
            address: 'Rua Marechal Deodoro da Fonseca, 2667 - Centro, São José do Rio Preto - SP, 15010-070', 
            subtitle: 'Clique para ver a Localização',
            phone: '  (17) 3222-5663',
            hours: 'Segunda a Sexta: 09:00 - 17:30<br>',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npUSSBUR5mdtGsnlTHr7dINXtXDXLBY0ESuFjkAXLco6wbADDhHLn3KGe3YTyFm8-UnSPPbs-9Zv9tkrO_tLNmqnOx7zu5DQ4xx5u2pLa-Ue1UtVDMDxkifxXCNuN3qnm1fN1S7gw=s1360-w1360-h1020-rw'
        }
    ]},
    { name: 'Rua Independencia', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'DDn', 
            address: 'R. Independência, 2709 - Centro, São José do Rio Preto - SP, 15010-110', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99726-3056',
            hours: 'Segunda a Sexta: 07:00 - 20:00<br>Sábado: 07:00 - 18:00<br>Domingo: 08:00-17:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipP9a3rF1xmFPrC8WNkDBxbGG7BrQL5htBe50ygz=s1360-w1360-h1020-rw'
        }
    ]},
    { name: 'Rua Saldanha', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Farmacia Bom Jesus', 
            address: 'R. Saldanha Marinho, 2808 - Centro, São José do Rio Preto - SP, 15010-100',
            subtitle: 'Clique para ver a Localização', 
            phone: '(17) 2136-7999',
            hours: 'Segunda a Domingo: 08:00 - 22:00',
            imageUrl: 'img/pontodevenda/farm.png'
        },
        { 
            name: 'Restaurante Pedro Batista', 
            address: 'R. Saldanha Marinho, 2916 - Centro, São José do Rio Preto - SP, 15010-100', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99784-2402',
            hours: 'Segunda a Sexta: 08:00 - 15:00<br>Sábado: 08:00 - 15:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOzIDlCnUj9XGjiD7gY5nL5dzPJJtOpBnzQMb0=s1360-w1360-h1020-rw'
        }
    ]},
    { name: 'Rua Bernadino de Campo', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Correio', 
            address: 'R. Bernardino de Campos, 3180- Centro', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3214-4178',
            hours: 'Segunda a Sexta: 08:00 - 17:00<br>Sábado: 08:00 - 13:00',
            imageUrl: ''
        },
        { 
            name: 'Vento Nobre', 
            address: 'R. Bernardino de Campos, 4093 - Centro, São José do Rio Preto - SP, 15020', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3301-0051',
            hours: '',
            imageUrl: 'https://vnequipamentos.spotway.com.br/imagens/empresas/6393-vnequipamentos/fotos/6357452-vnequipamentos-930x.webp'
        },
        { 
            name: 'Lee I', 
            address: 'R. Bernardino de Campos, 2635 - Centro, São José do Rio Preto - SP, 15015-300', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3363-7156',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npds6rCyVhRVJyGBnmf2u8ftRbAsuWMYZdbnIC6OL7VOQW2wt2H7mWXe6spahSKA4hfZivkMjCrZjrZiw_IQ5lmHqca64RgUc_D764PhUJNinitJrT3PG-GB3Frx4WH7TWdNpY=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Sebo Livraria', 
            address: ' R. Bernardino de Campos, 3371 - Centro, São José do Rio Preto - SP, 15015-300', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3353-0571',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 14:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJqgaOsNVatf0fXirWa8sqGVzn2EbwlHOLq8Tjcxipx36FJe48274rUXI7RDfA-7mMhRJ-ibngoQOdfvCpPZLe_vqCE80fq45sTxTmEf3ilsdgEeIV7jK33a22-aKoSovYgN30WQ=s1360-w1360-h1020-rw'
        },
        
        { 
            name: 'Casa Lotérica', 
            address: 'R. Bernardino de Campos, 2623 - Centro, São José do Rio Preto - SP, 15015-300', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3233-9416',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 13:00',
            imageUrl: 'img/pontodevenda/loterica.png'
        },
        { 
            name: 'Café Conte', 
            address: 'R. Bernardino de Campos, 3149 - Centro, São José do Rio Preto - SP, 15015-300', 
            subtitle: 'Clique para ver a Localização',
            phone: ' (17) 3235-1937',
            hours: 'Segunda a Sexta: 06:30 - 17:00<br>Sábado: 06:30 - 14:00<br>Domingo: 6:30-13:00',
            imageUrl: 'img/pontodevenda/cafe.png'
        },
        { 
            name: 'Banca Mundial', 
            address: 'Centro, São José do Rio Preto - SP, 15060-010', 
            subtitle: 'Clique para ver a Localização',
            phone: ' (17) 3235-1937',
            hours: '',
            imageUrl:'img/pontodevenda/b.mundial.png',
        }
    ]},
    { name: 'Rua Delegado Pinto de Toledo', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Chaveiro do Carlinho', 
            address: 'R. Delegado Pinto de Tolêdo, 2969 - Centro, São José do Rio Preto - SP, 15010-080', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3222-4424',
            hours: 'Segunda a Sexta: 07:30 - 18:00<br>Sábado: 07:30 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqewg3a_qVEWiSR1KAIAN3dqR1GHEFHGuzqIVExyJs2T2HpJns0KZ5UIzqJOMRhvX8eZYTp2TuxrEI6yTPE44Vk3LRgp4n8j0zq1O2iUBfH6oXSdtGbYhcbctpnJpund-Rs_3kXQ=s1360-w1360-h1020-rw'
        }
    ]},
    { name: 'Rua Voluntários São Paulo', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Senadinho Café', 
            address: 'R. Voluntários de São Paulo, 3191 - Centro, São José do Rio Preto - SP, 15015-200', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99150-5425',
            hours: 'Segunda a Sexta: 07:00 - 18:00<br>Sábado: 07:30 - 00:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no31gX2vYMM1C4HEzwrcGLUMZOK04E5oN8xLNPIsyOyTuHxIeHBcFn7-hXtmppsuqTWAhhuG167_qAiWw5k3chFUNpwTecwskQLeWLHv9p7An5fn4cYKb6BJqRGpigFScLbI4AW=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Pastelaria do Chinês', 
            address: 'Voluntários São Paulo', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-8399',
            hours: 'Segunda a Sábado: 07:00 - 18:00',
            imageUrl: 'https://lh3.googleusercontent.com/proxy/G9i8wap0zGpz_9BZqeuY-DIOhstvfYmUDyr9NoD8QCT-59wLYD6GJJSyRfRjhvnZ3PQjfG7MqRqxw9ApJeYYme18Ey5XOweYbSjW78hqW20neO_II0rmuRKVIOAJEUPzYNL8pOYZf503W7K9orgU4CaREkKwJJyk-PPNYw=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Li Kayon', 
            address: 'R. Voluntários de São Paulo, 2709 - Centro, São José do Rio Preto - SP, 15015-200', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3212-7407',
            hours: 'Segunda a Sexta: 08:00 - 23:00<br>Sábado: 08:00 - 16:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noWOOBG55TqyDMNgX8PqAtlbRAuCyRiiWQOXbNJi4N6nofuPsYrZZYiB-pzWJA1BxMrA_jS14U4AtyuyXS4nvhz5tCTKnguamW6ZA-eu8nXTgk2EEZvzNgC5GUORYes-0FrGH1g=s1360-w1360-h1020-rw'
        },

        { 
            name: 'Abescolor', 
            address: ' R. Voluntários de São Paulo, 2819 - Centro, São José do Rio Preto - SP, 15015-200',
            subtitle: 'Clique para ver a Localização', 
            phone: '(17) 98126-3414',
            hours: 'Segunda a Sexta: 08:00 - 17:50<br>Sábado: 08:00 - 12:50',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMR2Jcjy2sOilHYSNdR4qeVWZ5WnVNlVDvN4XSu=s1360-w1360-h1020-rw'
        },
  
        { 
            name: 'Banca de revista do Fórum', 
            address: '3332 R. Voluntários de São Paulo', 
            subtitle: 'Clique para ver a Localização',
            phone: '',
            hours: '',
            imageUrl: ''
        },
        { 
            name: 'Restaurante Brigida', 
            address: 'R. Voluntários de São Paulo, 2935 - Centro, São José do Rio Preto - SP, 15015-200', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3353-6113',
            hours: 'Segunda a Sábado: 11:00 - 14:30',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqx45AKQEDb9x7HX_IdklbqEJlhtpc-9JNJcjOKKWv-OjwPTHbFOVh887OK04N6yLaFW8cfXSmRNk1gjjsHwYk4kB6Xa58_ew4knnJMKyKoZum5TOFOuePEpdjptJF_bIgklM4Ki3jX-hJT=w141-h101-n-k-no-nu-pi-10-ya20-ro0-fo100'
        }
    ]},
    { name: 'Rua Siqueira Campos', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Riosoft Mobile', 
            address: 'R. Siqueira Campos, 2811 - Centro, São José do Rio Preto - SP, 15010-040', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3234-31409',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMggYLYG8aV9XvRYFhkrUD0gDwNY4DkTdRGYEkS=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Cell Store', 
            address: 'R. Siqueira Campos, 3120 - Centro, São José do Rio Preto - SP, 15010-040', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99155-6000',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNqm4IGSelx_CKRxKD98iP664bLj3EjN6STwYtP=s1360-w1360-h1020-rw',
        }
    ]},
    { name: 'Rua Jorge Tibiriça', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [

        { 
            name: 'Ohtica', 
            address: 'R. Jorge Tibiriçá, 3233 - Centro, São José do Rio Preto - SP, 15014-040', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 99177-0879',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 07:00 - 16:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrX4chTn64ZF9T7qvNU_k5OtNLUALjja4bobsfhYXzI9oaDXIzq3OG8TJSwn4kIVzOwaJwpInCASNsdhfeeCgux8Lz3PQuXWteIry6yfcHs9OzQLaBz8UslW7i-l4HR4VrLnU8OVg=w243-h174-n-k-no-nu-pi-20-ya320-ro0-fo100', 
        },

    ]}
],
redentora: [
    { name: 'Vila Redentora', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Só Suco', 
            address: 'Voluntários de São Paulo, 3918 - Vila Redentora, São José do Rio Preto - SP, 15060-010', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3234-2797',
            hours: 'Segunda a Sexta: 10:30 - 15:00<br>Sábado: 11:00 - 15:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqCetSm-SIVu3ioGkSJs2nCJL0jNRuIEyKY_fh1R_FDcNFX_XO-fcA7rCd3ar-xstdCV8KivYUY-X_hvfkI4EY6nuXXH5ZG91tdbEDqCs5jLR3uPgX4Bh2VpVeNsxbNU0aKFy-yJQ=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Óticas Kiriey', 
            address: ' R. Voluntários de São Paulo, 3746A - Vila Redentora, São José do Rio Preto - SP, 15015-200', 
            subtitle: 'Clique para ver a Localização',
            phone: ' (17) 3231-0144',
            hours: 'segunda: 09:00 - 18:00 <br>terça a sexta:08:30 - 18:00<br>Sábado: 08:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPkYU0XyYjtTA3HRAmdzklcvpgrqMQ4JFZaTaU=s1360-w1360-h1020-rw'
        },
        { 
            name: 'BlanCafé', 
            address: 'R. XV de Novembro, 4095 - Vila Redentora, São José do Rio Preto - SP, 15015-790', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3222-1444',
            hours: 'Segunda a Sexta: 07:00 - 17:00<br>',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noDnFzsLJNab6sgDTWM1NVQgITRhhp5MuBOBt64taaJcQE83olyC-C_YCn9oC1eqB11_PPybUjop1WhXIqLEwmYfLSYIEbSeX8KoTh7h3hXGHKbu5dAImDPHfpEfRQvCy6Qf8supg=s1360-w1360-h1020-rw'
        },

        { 
            name: 'Fogos Cristal', 
            address: 'R. Bernardino de Campos, 4062 - Vila Redentora, São José do Rio Preto - SP, 15015-300', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3222-3090',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 13:00',
            imageUrl: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?output=thumbnail&cb_client=lu.gallery.gps&panoid=AhIuO-ucjHDwBzlp0g3o0A&w=141&h=101&thumb=2&yaw=300.74594&pitch=0'
        },
        { 
            name: 'Banca Redentora', 
            address: 'RUA ONDINA, PRAÇA ALDO TONELI, 550 - Vila Redentora, São José do Rio Preto - SP, 15015-750', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 98135-4570',
            hours: 'Segunda a Sexta: 08:00 - 16:30<br>Sábado: 08:00 - 12:30',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMQDFXgbkUH40VIN7XC_VxE24QNTpiJe8O5yVFN=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Quin Lanches', 
            address: 'R. Luíz Vaz de Camões, 3153 - Vila Redentora, São José do Rio Preto - SP, 15015-750', 
            phone: '',
            hours: '',
            imageUrl: 'data:image/jpg;base64,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'
        },
        { 
            name: 'Açai da praia', 
            address: 'R. XV de Novembro, 3810 - Vila Redentora, São José do Rio Preto - SP, 15015-110', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-8399',
            hours: 'Segunda a Domingo: 10:00 - 22:45',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNTMyvyDVHAcoWC-wwuOarUnHIOWcgbVgFpcneN=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Fricassê', 
            address: 'R. Ondina, 417 - Vila Redentora, São José do Rio Preto - SP, 15015-205', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3235-2431',
            hours: 'Segunda a Sábado: 10:45 - 14:30',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr3zmGRUaEbIykurV1gsPLpN79JlJOIWn2qq8bssA7tJxoIMtdzVRQYJp5k-RKawlJD4k8b5qsiuaEPi9W_w72-oFKxvwA8ur7VYNDWCe73LcXkI0CX9V4fxHnOsJRAgS2Hdrct=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Cacau Show', 
            address: 'R. Pernambuco, 3160 - Vila Redentora, São José do Rio Preto - SP, 15015-770', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3232-8399',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noCJ761HK5KooFvTGL9PwlZEy4HN3MVrQLEAdieEexv84ZRd1iFQNBcYEvXmtaZrT52gVmBBvWZXFCmbkaGuwu_v_nxKVjcB1QWB91tfFCLua0-vZI9J5DlpzUpLL09y4DXT4gmRA=s1360-w1360-h1020-rw'
        },
        { 
            name: 'VIK Modas', 
            address: 'R. XV de Novembro, 4320 - Vila Redentora, São José do Rio Preto - SP, 15015-110', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 98127-7549',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 13:00',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEV2AYBT8v62xQ5EJb2yrinYFAoM8wdVjnyQ&s'
        },
        { 
            name: 'Bife & Cia', 
            address: 'R. Pernambuco, 3249 - Vila Redentora, São José do Rio Preto - SP, 15015-770', 
            phone: '(17) 3232-8399',
            hours: 'Segunda a Sexta: 11:30 - 14:30',
            imageUrl: 'data:image/jpeg;base64,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'
        }
    ]},
    { name: 'Rua Angeolino Caseli', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Invaderm', 
            address: 'R. Angeolino Caseli, 345 - Vila Redentora, São José do Rio Preto - SP, 15015-010', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3364-6407',
            hours: '',
            imageUrl:' https://lh3.googleusercontent.com/gps-cs-s/AC9h4nprKDccjgRGbx45QcpoV38M8RHGNMs8GcmpOnz4hkKjCDZODwcxZr6UyAOLa84vdgQYCfkr4LC9NVtORfm2NpzL00zwGukASb-uKjzbxETbJ2BxTNwrskzyNgIoB4y_ZZ7JP-rx=s1360-w1360-h1020-rw'
        },

    ]},
    { name: 'Rua Jaci', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Olho Clínica e Cirurgia', 
            address: 'R. Jaci, 3447 - Vila Redentora, São José do Rio Preto - SP, 15015-810', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3203-9900',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 17:30',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPMIiCqH2W1mm6RFxPRo53HrgCXWrOwtF0dpuo2=s1360-w1360-h1020-rw'
        },
        { 
            name: 'sis baby kids', 
            address: ' R. Jaci, 3450 - Vila Redentora, São José do Rio Preto - SP, 15015-810', 
            subtitle: 'Clique para ver a Localização',
            phone: ' (17) 3363-3175',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 13:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOYHMo0gUVwHEo12NO5KCcpPDB-CkaahM2nnxxZ=s1360-w1360-h1020-rw'
        }

        
    ]},
    { name: 'Rua Mirassol', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Gerson Ignacio', 
            address: ' R. Mirassol, 3311 - Vila Redentora, São José do Rio Preto - SP, 15025-130', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3231-7586',
            hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 16:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrPvloI4zuZJjlUGzskBY0akEMP-Lj__vLx_X92If0Fct4k9P08wk-6DafAM0wcdQDu1wAXsppphk0A6-aWPsZyQDkYd-7rKwDfRSuGSQogt8_GIUXowVnZ0STO9Ih34e9NwzN5Tg=s1360-w1360-h1020-rw'
        }
    ]},
    { name: 'Rua Antonio de Godoy', subtitle: 'Clique para ver os Pontos de Vendas disponiveis', businesses: [
        { 
            name: 'Um Brunch', 
            address: ' R. Antônio de Godoy, 3899 - Vila Redentora, São José do Rio Preto - SP, 15015-000', 
            subtitle: 'Clique para ver a Localização',
            phone: ' (17) 99212-1931',
            hours: 'terça a sabado: 09:00 - 19:00',
            imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZNu9xJqU_rz2y3X4nuIq1ONgCxJpwO2F51OqMGxWCsYXz4sUQJqZeWHJx8YKPXzIfJYEmURFAHxzs4NkTBUSoOmfcgDRxX2uK69ozsCpseIDadao61xEcZ45p1ns_ICMjlVlVrw=s1360-w1360-h1020-rw'
        },
        { 
            name: 'Eliana Guidotti', 
            address: 'R. Antônio de Godoy, n 3671 - Vila Redentora, São José do Rio Preto - SP, 15015-100', 
            phone: '(17) 99260-4029',
            hours: 'Segunda a Sexta: 09:00 - 18:00<br>Sábado: 09:00 - 13:00',
            imageUrl: 'data:image/jpeg;base64,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'
        },
        { 
            name: 'Buffulin Reumatologia', 
            address: ' R. Antônio de Godoy, 3773 - Vila Redentora, São José do Rio Preto - SP, 15015-100', 
            subtitle: 'Clique para ver a Localização',
            phone: '(17) 3212-9571',
            hours: 'Segunda a Sexta: 09:00 - 18:00',
            imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNEwYOxz5MpSjPIKzAbHwj1dGvbsbl2gCJ7w6H-=s1360-w1360-h1020-rw'
        }
    ]}
],
cabines: [
    {name:'CABINES NO CENTRO', subtitle:'Clique para ver as Cabines disponiveis', businesses: [
    {
        name: 'CORONEL', 
        subtitle: 'Clique para ver a Localização', 
        address: '3008 R. Cel. Spínola de Castro',
        phone: '',
        hours: 'Segunda a Sexta: 8:00 - 17:00<br>Sabado: 08:00 - 12:00',
        imageUrl: 'img/cabines/coronel.jpg'
    },

    { 
        name: 'RUI BARBOSA', 
        subtitle: 'Clique para ver a Localização', 
        address: '3002 R. Voluntários de São Paulo',
        phone: '',
        hours: 'Segunda a Sexta: 8:00 - 18:00<br>Sabado: 08:00 - 12:00',
        imageUrl: 'img/cabines/rui.jpg'
    },

    { 
        name: 'MERCADO MUNICIPAL', 
        subtitle: 'Clique para ver a Localização', 
        address: 'R. Antônio de Godoy, 3048 - Centro, São José do Rio Preto - SP, 15015-100',
        phone: '',
        hours: 'Segunda a Sexta: 8:00 - 16:30<br>Sabado: 08:00 - 12:00',
        imageUrl: ''
    },

    { 
        name: 'FÓRUM', 
        subtitle: 'Clique para ver a Localização', 
        address: 'R.Bernadino de Campos, 3199 - centro',
        phone: '',
        hours: 'Segunda a Sexta: 8:00 - 17:00<br>Sabado: 08:00 - 12:00',
        imageUrl: 'img/cabines/forum.jpg' 
    },

]},
    {name:'CABINES NA REDENTORA', subtitle:'Clique para ver as Cabines disponiveis', businesses:[
    
    { 
        name: 'CARDEAL', 
        subtitle: 'Clique para ver a Localização', 
        address: 'R. Voluntários, de São Paulo, 3697 - Vila Redentora',
        phone: '',
        hours: 'Segunda a Sexta: 7:30 - 17:00<br>Sabado: 08:00 - 12:00',
        imageUrl: 'img/cabines/cardeal.jpg'
    },
    { 
        name: 'ALDO TONELI', 
        subtitle: 'Clique para ver a Localização', 
        address: 'R. Ondina, 518 - Vila Redentora',
        phone: '',
        hours: 'Segunda a Sexta: 7:30 - 18:00<br>Sabado: 08:00 - 12:00',
        imageUrl: 'img/cabines/aldo.jpg'
    },

    { 
        name: 'RAUL SILVA', 
        subtitle: 'Clique para ver a Localização', 
        address: 'Rua Raul Silva, 454',
        phone: '',
        hours: 'Segunda a Sexta: 8:00 - 16:30',
        imageUrl: 'img/cabines/raul.jpg'
    },

    { 
        name: 'GENEROSA', 
        subtitle: 'Clique para ver a Localização', 
        address: '3093 R. Generosa Bastosa',
        phone: '',
        hours: 'Segunda a Sexta: 7:30 - 17:00<br>Sabado: 08:00 - 12:00',
        imageUrl: 'img/cabines/generosa.jpg'
    }
    
    ]}
],
};


