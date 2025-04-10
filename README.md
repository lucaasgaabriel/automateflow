# Automate Flow
## Um sistema SaaS para automação de processos, integração de sistemas e orquestração de dados.

🔧 Funcionalidades
- Cadastro de workflows de automação
- Configuração de integrações com APIs externas
- Execução e monitoramento de tarefas agendadas (usando node-cron)
- Logs e status das execuções
- Painel de controle com autenticação JWT
- Upload de scripts customizados (padrão function(input) {}) a serem executados no runtime
- Banco híbrido: MongoDB para fluxos dinâmicos e MySQL para usuários e permissões

🧱 Stacks
- Backend: Node.js + Express
- Banco de dados: MongoDB (fluxos + execuções) + MySQL (usuários, permissões)
- Cloud: Deploy em GCP ou AWS
- Auth: JWT com roles (admin, dev, user)
- CI/CD: GitHub Actions + Docker + Terraform (IaC)
- Infra: Dockerizado, com variáveis de ambiente via .env + Docker Compose
- Frontend: React/Next.js com dashboard para gerenciar tudo
