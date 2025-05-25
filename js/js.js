       // Controle de navegação
        let currentPage = 'home';
        let currentCategory = null;
        let currentBusiness = null;
        
        // Dados dos estabelecimentos organizados por setor/rua
        const businessData = {
            centro: [
                { name: 'Setor 3 e 2', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Rio Modas', 
                        address: 'Setor 3 e 2', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null // URL da imagem será adicionada posteriormente
                    },
                    { 
                        name: 'Gaúcho', 
                        address: 'Setor 3 e 2', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Lar doce lar', 
                        address: 'Setor 3 e 2', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Lee I', 
                        address: 'Setor 3 e 2', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Lee II', 
                        address: 'Setor 3 e 2', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Setor 4 e 5 (Coronel)', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Reino Motos', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Avenda Joli. A', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Riosoft Mobile', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Cartonagem 2 irmãos', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Elec Cell', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Bar do Toquinho', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Elos Textil', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Estacionamento set park 2', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Farmacia Bom Jesus', 
                        address: 'Setor 4 e 5 (Coronel)', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'General Glicério', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Bar do João', 
                        address: 'General Glicério', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Estilo Lanchonete', 
                        address: 'General Glicério', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Confeitaria do Leo', 
                        address: 'General Glicério', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Ponto Smart', 
                        address: 'General Glicério', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Antonio de Godoy', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Padaria todo dia', 
                        address: 'Antonio de Godoy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Meire Maiuny', 
                        address: 'Antonio de Godoy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Biall PetShop', 
                        address: 'Antonio de Godoy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Correio', 
                        address: 'Antonio de Godoy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'XV Novembro', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Estacionamento California', 
                        address: 'XV Novembro', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Rio Mel', 
                        address: 'XV Novembro', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Casa das Pimentas', 
                        address: 'XV Novembro', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Marechal', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Casa Lotérica', 
                        address: 'Marechal', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Senadinho Café', 
                        address: 'Marechal', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Marrom Café', 
                        address: 'Marechal', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Brito Lanches', 
                        address: 'Marechal', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Casa do sapateiro', 
                        address: 'Marechal', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Rua Independencia', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'DDn', 
                        address: 'Rua Independencia', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Saldanha', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Restaurante Pedro Batista', 
                        address: 'Saldanha', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Bernadinho de Campo', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Sebo Livraria', 
                        address: 'Bernadinho de Campo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Café Conte', 
                        address: 'Bernadinho de Campo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Delegado Pinto de Toledo', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Chaveiro do Carlinho', 
                        address: 'Delegado Pinto de Toledo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Voluntários São Paulo', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Pastelaria do Chinês', 
                        address: 'Voluntários São Paulo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Lee Kayeuun', 
                        address: 'Voluntários São Paulo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Espetinho Catedral', 
                        address: 'Voluntários São Paulo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Abs Color', 
                        address: 'Voluntários São Paulo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Turiúba', 
                        address: 'Voluntários São Paulo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Banca de revista do Fórum', 
                        address: 'Voluntários São Paulo', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Siqueira Campos', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Cell Store', 
                        address: 'Siqueira Campos', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Jorge Tibiriça', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Pastelaria Palmeiras', 
                        address: 'Jorge Tibiriça', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]}
            ],
            redentora: [
                { name: 'Redentora', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Só Suco', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Óticas Kiriey', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Blan Café', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Vento Nobre', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: '(Bernadino) Fogos Cristal', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Banca Redentora', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Quin Lanches', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Açai da praia', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Fricassê', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Cacau Show', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'VIK Modas', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Bife e Companhia', 
                        address: 'Redentora', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Angelino Caseli', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Invaderme', 
                        address: 'Angelino Caseli', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'sis baby kids', 
                        address: 'Angelino Caseli', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Rua Jacy', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Clinica de Olho Gui', 
                        address: 'Rua Jacy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Um Brunch Café', 
                        address: 'Rua Jacy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Rua Mirassol', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Doutor Gerso', 
                        address: 'Rua Mirassol', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]},
                { name: 'Antonio de Godoy', subtitle: 'PONTOS DE VENDAS', businesses: [
                    { 
                        name: 'Eliana Guidotti', 
                        address: 'Antonio de Godoy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    },
                    { 
                        name: 'Clinica Buffulin', 
                        address: 'Antonio de Godoy', 
                        phone: '(17) 3232-8399',
                        hours: 'Segunda a Sexta: 08:00 - 18:00<br>Sábado: 08:00 - 12:00',
                        imageUrl: null
                    }
                ]}
            ],
            cabines: [
                { name: 'CORONEL', subtitle: 'CABINE', address: 'Centro - Coronel', phone: '(17) 3232-8399' },
                { name: 'RUI BARBOSA', subtitle: 'CABINE', address: 'Centro - Rui Barbosa', phone: '(17) 3232-8399' },
                { name: 'RAUL SILVA', subtitle: 'CABINE', address: 'Centro - Raul Silva', phone: '(17) 3232-8399' },
                { name: 'MERCADO MUNICIPAL', subtitle: 'CABINE', address: 'Centro - Mercado Municipal', phone: '(17) 3232-8399' },
                { name: 'FÓRUM', subtitle: 'CABINE', address: 'Centro - Fórum', phone: '(17) 3232-8399' },
                { name: 'CARDEAL', subtitle: 'CABINE', address: 'Centro - Cardeal', phone: '(17) 3232-8399' },
                { name: 'GENEROSA', subtitle: 'CABINE', address: 'Centro - Generosa', phone: '(17) 3232-8399' },
                { name: 'ALDO TONELI', subtitle: 'CABINE', address: 'Centro - Aldo Toneli', phone: '(17) 3232-8399' }
            ]
        };

        function hideAllPages() {
            document.getElementById('home-page').classList.add('hidden');
            document.getElementById('list-page').classList.add('hidden');
            document.getElementById('detail-page').classList.add('hidden');
        }

        function showPage(pageId) {
            hideAllPages();
            const page = document.getElementById(pageId);
            page.classList.remove('hidden');
            page.classList.add('fade-in');
        }

        function showCategory(category) {
            currentPage = 'list';
            currentCategory = category;
            currentBusiness = null;
            
            const businessList = document.getElementById('business-list');
            const pageTitle = document.getElementById('page-title');
            const navItems = document.getElementById('nav-items');
            const currentCategoryEl = document.getElementById('current-category');
            
            // Configurar navegação
            if (category === 'cabines') {
                navItems.innerHTML = '🏠 CABINES';
            } else {
                navItems.innerHTML = '📍 CENTRO 📍 REDENTORA 🏠 CABINES';
            }
            currentCategoryEl.textContent = category.toUpperCase();
            pageTitle.textContent = category.toUpperCase();
            
            // Limpar lista
            businessList.innerHTML = '<div class="loading">Carregando estabelecimentos...</div>';
            
            // Simular carregamento
            setTimeout(() => {
                businessList.innerHTML = '';
                
                const items = businessData[category] || [];
                items.forEach(item => {
                    const businessItem = document.createElement('div');
                    businessItem.className = 'business-item';
                    businessItem.innerHTML = `
                        <div class="business-title">${item.name}</div>
                        <div class="business-subtitle">${item.subtitle}</div>
                    `;
                    
                    businessItem.onclick = () => showBusinessDetail(item);
                    businessList.appendChild(businessItem);
                });
            }, 500);
            
            showPage('list-page');
        }

        function showBusinessDetail(business) {
            currentPage = 'detail';
            currentBusiness = business;
            
            const businessDetail = document.getElementById('business-detail');
            
            let detailHTML = `
                <div class="business-name">${business.name}</div>
            `;
            
            if (business.address) {
                detailHTML += `
                    <div class="business-info">
                        <strong>Endereço:</strong> ${business.address}
                    </div>
                `;
            }
            
            if (business.phone) {
                detailHTML += `
                    <div class="business-info">
                        <strong>Telefone:</strong> ${business.phone}
                    </div>
                `;
            }
            
            if (business.hours) {
                detailHTML += `
                    <div class="business-info">
                        <strong>Horário de Funcionamento:</strong><br>
                        ${business.hours}
                    </div>
                `;
            }
            
            if (business.description) {
                detailHTML += `
                    <div class="business-info">
                        <strong>Informação:</strong> ${business.description}
                    </div>
                `;
            }
            
            // Adicionar foto se disponível
            if (business.imageUrl) {
                detailHTML += `
                    <div class="business-photo" style="background-image: url('${business.imageUrl}');">
                    </div>
                `;
            } else if (business.businesses) {
                // Placeholder para setores que têm negócios
                detailHTML += `
                    <div class="business-photo placeholder">
                        <div>
                            <div style="font-size: 48px; margin-bottom: 10px;">🏪</div>
                            <div>${business.name.toUpperCase()}<br>PONTOS DE VENDA</div>
                            <div style="margin-top: 15px; font-size: 20px;">📞 ${business.businesses[0]?.phone || '(17) 3232-8399'}</div>
                        </div>
                    </div>
                `;
            }
            
            if (business.businesses) {
                detailHTML += `<div style="margin-top: 20px;">`;
                business.businesses.forEach(sub => {
                    detailHTML += `
                        <div class="business-item" onclick="showSubBusinessDetail('${sub.name}', '${sub.address}', '${sub.phone}', '${sub.hours || ''}', '${sub.imageUrl || ''}')">
                            <div class="business-title">${sub.name}</div>
                            <div class="business-subtitle">${sub.address}</div>
                        </div>
                    `;
                });
                detailHTML += `</div>`;
            }
            
            businessDetail.innerHTML = detailHTML;
            
            showPage('detail-page');
        }

        function showSubBusinessDetail(name, address, phone, hours, imageUrl) {
            const businessDetail = document.getElementById('business-detail');
            
            let detailHTML = `
                <div class="business-name">${name}</div>
                <div class="business-info">
                    <strong>Endereço:</strong> ${address}
                </div>
                <div class="business-info">
                    <strong>Telefone:</strong> ${phone}
                </div>
            `;
            
            if (hours && hours !== '') {
                detailHTML += `
                    <div class="business-info">
                        <strong>Horário de Funcionamento:</strong><br>
                        ${hours}
                    </div>
                `;
            }
            
            // Adicionar foto se disponível
            if (imageUrl && imageUrl !== '') {
                detailHTML += `
                    <div class="business-photo" style="background-image: url('${imageUrl}');">
                    </div>
                `;
            } else {
                detailHTML += `
                    <div class="business-photo placeholder">
                        <div>
                            <div style="font-size: 48px; margin-bottom: 10px;">🏪</div>
                            <div>${name.toUpperCase()}</div>
                            <div style="margin-top: 15px; font-size: 20px;">📞 ${phone}</div>
                        </div>
                    </div>
                `;
            }
            
            businessDetail.innerHTML = detailHTML;
        }

        function goBack() {
            if (currentPage === 'detail') {
                // Se estamos nos detalhes, voltar para a lista da categoria
                if (currentCategory) {
                    showCategory(currentCategory);
                } else {
                    goHome();
                }
            } else if (currentPage === 'list') {
                // Se estamos na lista, voltar para home
                goHome();
            } else {
                // Qualquer outro caso, voltar para home
                goHome();
            }
        }

        function goHome() {
            currentPage = 'home';
            currentCategory = null;
            currentBusiness = null;
            showPage('home-page');
        }

        // Adicionar evento de swipe para navegação móvel
        let startX, startY;
        
        document.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', function(e) {
            if (!startX || !startY) return;
            
            let endX = e.changedTouches[0].clientX;
            let endY = e.changedTouches[0].clientY;
            
            let diffX = startX - endX;
            let diffY = startY - endY;
            
            // Swipe para direita (voltar)
            if (Math.abs(diffX) > Math.abs(diffY) && diffX < -50) {
                if (currentPage !== 'home') {
                    goBack();
                }
            }
            
            startX = null;
            startY = null;
        });