package dao;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import entity.User;

/**
 * A data access object (DAO) providing persistence and search support for User
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see entity.User
 * @author MyEclipse Persistence Tools
 */

public class UserDAO extends HibernateDaoSupport {

	private static final Logger log = LoggerFactory.getLogger(UserDAO.class);
	// property constants
	public static final String NAME = "name";
	public static final String PWD = "pwd";
	public static final String UNIT = "unit";
	public static final String EMAIL = "email";
	public static final String TEL = "tel";
	public static final String CEL = "cel";
	public static final String TYPE = "type";
	public static final String ROLE = "role";
	public static final String COMMENT = "comment";
	public static final String PHOTO = "photo";
	public static final String STATUS = "status";
	public static final String SEX = "sex";

	protected void initDao() {
		// do nothing
	}

	public void save(User transientInstance) {
		log.debug("saving User instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(User persistentInstance) {
		log.debug("deleting User instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public void update(User persistentInstance) {
		log.debug("updating User instance");
		try {
			getHibernateTemplate().update(persistentInstance);
			log.debug("update successful");
		} catch (RuntimeException re) {
			log.error("update failed", re);
			throw re;
		}
	}
	
	public User findById(java.lang.Integer id) {
		log.debug("getting User instance with id: " + id);
		try {
			User instance = (User) getHibernateTemplate()
					.get("entity.User", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(User instance) {
		log.debug("finding User instance by example");
		try {
			List results = getHibernateTemplate().findByExample(instance);
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding User instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from User as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}


	public List findByName(Object name) {
		return findByProperty(NAME, name);
	}

	public List findByPwd(Object pwd) {
		return findByProperty(PWD, pwd);
	}

	public List findByUnit(Object unit) {
		return findByProperty(UNIT, unit);
	}

	public List findByEmail(Object email) {
		return findByProperty(EMAIL, email);
	}

	public List findByTel(Object tel) {
		return findByProperty(TEL, tel);
	}

	public List findByCel(Object cel) {
		return findByProperty(CEL, cel);
	}

	public List findByType(Object type) {
		return findByProperty(TYPE, type);
	}

	public List findByRole(Object role) {
		return findByProperty(ROLE, role);
	}

	public List findByComment(Object comment) {
		return findByProperty(COMMENT, comment);
	}

	public List findByPhoto(Object photo) {
		return findByProperty(PHOTO, photo);
	}

	public List findByStatus(Object status) {
		return findByProperty(STATUS, status);
	}

	public List findBySex(Object sex) {
		return findByProperty(SEX, sex);
	}

	public List findAll() {
		log.debug("finding all User instances");
		try {
			String queryString = "from User";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public User merge(User detachedInstance) {
		log.debug("merging User instance");
		try {
			User result = (User) getHibernateTemplate().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(User instance) {
		log.debug("attaching dirty User instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(User instance) {
		log.debug("attaching clean User instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static UserDAO getFromApplicationContext(ApplicationContext ctx) {
		return (UserDAO) ctx.getBean("UserDAO");
	}

}