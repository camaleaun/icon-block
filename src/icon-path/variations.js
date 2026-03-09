import { AnalysisIcon } from './icons';
import { AnalyticsIcon } from './icons';
import { AuditCenterIcon } from './icons';
import { ChatIcon } from './icons';
import { CheckboxIcon } from './icons';
import { DocumentationIcon } from './icons';
import { DocumentsIcon } from './icons';
import { EnginesIcon } from './icons';
import { FormsIcon } from './icons';
import { GenerativeAiIcon } from './icons';
import { GovernanceIcon } from './icons';
import { LawIcon } from './icons';
import { LockIcon } from './icons';
import { LowCodeIcon } from './icons';
import { MobileIcon } from './icons';
import { ProcessesIcon } from './icons';
import { RisksIcon } from './icons';
import { SignatureBulkIcon } from './icons';
import { SignatureIcon } from './icons';
import { SignIcon } from './icons';
import { TaskCenterIcon } from './icons';
import { TraceabilityIcon } from './icons';
import { UsersIcon } from './icons';
import { VisibilityIcon } from './icons';
import { WorkflowIcon } from './icons';

const variations = [
	{
		isDefault: true,
		name: 'analysis',
		title: 'Analysis',
		icon: AnalysisIcon,
		attributes: { name: 'analysis' },
	},
	{
		isDefault: false,
		name: 'analytics',
		title: 'Analytics',
		icon: AnalyticsIcon,
		attributes: { name: 'analytics' },
	},
	{
		isDefault: false,
		name: 'audit-center',
		title: 'Audit Center',
		icon: AuditCenterIcon,
		attributes: { name: 'audit-center' },
	},
	{
		isDefault: false,
		name: 'chat',
		title: 'Chat',
		icon: ChatIcon,
		attributes: { name: 'chat' },
	},
	{
		isDefault: false,
		name: 'checkbox',
		title: 'Checkbox',
		icon: CheckboxIcon,
		attributes: { name: 'checkbox' },
	},
	{
		isDefault: false,
		name: 'documentation',
		title: 'Documentation',
		icon: DocumentationIcon,
		attributes: { name: 'documentation' },
	},
	{
		isDefault: false,
		name: 'documents',
		title: 'Documents',
		icon: DocumentsIcon,
		attributes: { name: 'documents' },
	},
	{
		isDefault: false,
		name: 'engines',
		title: 'Engines',
		icon: EnginesIcon,
		attributes: { name: 'engines' },
	},
	{
		isDefault: false,
		name: 'forms',
		title: 'Forms',
		icon: FormsIcon,
		attributes: { name: 'forms' },
	},
	{
		isDefault: false,
		name: 'generative-ai',
		title: 'Generative Ai',
		icon: GenerativeAiIcon,
		attributes: { name: 'generative-ai' },
	},
	{
		isDefault: false,
		name: 'governance',
		title: 'Governance',
		icon: GovernanceIcon,
		attributes: { name: 'governance' },
	},
	{
		isDefault: false,
		name: 'law',
		title: 'Law',
		icon: LawIcon,
		attributes: { name: 'law' },
	},
	{
		isDefault: false,
		name: 'lock',
		title: 'Lock',
		icon: LockIcon,
		attributes: { name: 'lock' },
	},
	{
		isDefault: false,
		name: 'low-code',
		title: 'Low Code',
		icon: LowCodeIcon,
		attributes: { name: 'low-code' },
	},
	{
		isDefault: false,
		name: 'mobile',
		title: 'Mobile',
		icon: MobileIcon,
		attributes: { name: 'mobile' },
	},
	{
		isDefault: false,
		name: 'processes',
		title: 'Processes',
		icon: ProcessesIcon,
		attributes: { name: 'processes' },
	},
	{
		isDefault: false,
		name: 'risks',
		title: 'Risks',
		icon: RisksIcon,
		attributes: { name: 'risks' },
	},
	{
		isDefault: false,
		name: 'signature-bulk',
		title: 'Signature Bulk',
		icon: SignatureBulkIcon,
		attributes: { name: 'signature-bulk' },
	},
	{
		isDefault: false,
		name: 'signature',
		title: 'Signature',
		icon: SignatureIcon,
		attributes: { name: 'signature' },
	},
	{
		isDefault: false,
		name: 'sign',
		title: 'Sign',
		icon: SignIcon,
		attributes: { name: 'sign' },
	},
	{
		isDefault: false,
		name: 'task-center',
		title: 'Task Center',
		icon: TaskCenterIcon,
		attributes: { name: 'task-center' },
	},
	{
		isDefault: false,
		name: 'traceability',
		title: 'Traceability',
		icon: TraceabilityIcon,
		attributes: { name: 'traceability' },
	},
	{
		isDefault: false,
		name: 'users',
		title: 'Users',
		icon: UsersIcon,
		attributes: { name: 'users' },
	},
	{
		isDefault: false,
		name: 'visibility',
		title: 'Visibility',
		icon: VisibilityIcon,
		attributes: { name: 'visibility' },
	},
	{
		isDefault: false,
		name: 'workflow',
		title: 'Workflow',
		icon: WorkflowIcon,
		attributes: { name: 'workflow' },
	},
];

variations.forEach( ( variation ) => {
	if ( variation.isActive ) {
		return;
	}
	variation.isActive = ( blockAttributes, variationAttributes ) =>
		blockAttributes.name === variationAttributes.name;
} );

export default variations;
